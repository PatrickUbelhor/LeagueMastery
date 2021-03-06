package team.gif.controller;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.gif.model.ParsedChampionList;
import team.gif.model.MasteryListing;
import team.gif.model.riot.Champion;
import team.gif.model.riot.Mastery;
import team.gif.service.MasteryService;
import team.gif.service.StaticDataService;

import java.net.URISyntaxException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/mastery", produces = MediaType.APPLICATION_JSON_VALUE)
public class MasteryController {
	
	private static final Logger logger = LogManager.getLogger(MasteryController.class);
	private final MasteryService masteryService;
	private final StaticDataService staticDataService;
	private final CacheManager cacheManager;
	
	@Autowired
	public MasteryController(MasteryService masteryService, StaticDataService staticDataService, CacheManager cacheManager) {
		this.masteryService = masteryService;
		this.staticDataService = staticDataService;
		this.cacheManager = cacheManager;
	}
	
	// TODO: Move this to a dedicated 'scheduler' bean, since this cache is required by more than just this class
	// TODO: turn this into a cron job that runs on Tuesdays?
	@Scheduled(fixedDelayString = "${cache.reset.timer}")
	public void resetCache() {
		logger.info("Clearing cache");
		cacheManager.getCacheNames()
				.forEach(cacheName -> cacheManager.getCache(cacheName).clear());
		
		String latestVersion = staticDataService.getLatestVersionNumber();
		staticDataService.getChampionList(latestVersion);
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/by-summoner/{summonerId}/{region}")
	public ResponseEntity<List<MasteryListing>> getMasteriesBySummoner(@PathVariable String summonerId, @PathVariable String region) throws URISyntaxException {
		// TODO: Throw special exception if not a valid region
		Mastery[] masteries = masteryService.getMasteries(summonerId, region);
		String version = staticDataService.getLatestVersionNumber();
		
		ParsedChampionList champions = staticDataService.getChampionList(version);
		
		List<MasteryListing> result;
		result = Arrays.stream(masteries).parallel()
				.map(mastery -> {
					Champion champ = champions.getChampion(mastery.getChampionId());
					return new MasteryListing(
							mastery.getChampionId(),
							"http://ddragon.leagueoflegends.com/cdn/" + version + "/img/champion/" + champ.getImage().getFull(),
							champions.getChampion(mastery.getChampionId()).getName(),
							mastery.getChampionLevel(),
							mastery.getChampionPoints(),
							champ.getTags()
					);
				})
				.collect(Collectors.toList());
		
		return ResponseEntity.ok(result);
	}

}
