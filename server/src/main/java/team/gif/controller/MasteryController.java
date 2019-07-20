package team.gif.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.gif.model.ChampionProcessor;
import team.gif.model.MasteryListing;
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
	
	@Autowired
	private MasteryService masteryService;
	
	@Autowired
	private StaticDataService staticDataService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/by-summoner/{summonerId}")
	public ResponseEntity<List<MasteryListing>> getMasteriesBySummoner(@PathVariable String summonerId) throws URISyntaxException {
		staticDataService.updateChampionList();
		Mastery[] masteries = masteryService.getMasteries(summonerId);
		String version = staticDataService.getLatestVersionNumber();
		
		ChampionProcessor processor = ChampionProcessor.getInstance();
		
		List<MasteryListing> result;
		result = Arrays.stream(masteries).parallel()
				.map(mastery -> new MasteryListing(
						mastery.getChampionId(),
						"http://ddragon.leagueoflegends.com/cdn/" + version + "/img/champion/" + processor.getChampion(mastery.getChampionId()).getImage().getFull(),
						processor.getChampion(mastery.getChampionId()).getName(),
						mastery.getChampionLevel(),
						mastery.getChampionPoints())
				)
				.collect(Collectors.toList());
		
		return ResponseEntity.ok(result);
	}

}
