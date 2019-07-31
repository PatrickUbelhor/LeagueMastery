package team.gif.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.CacheManager;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team.gif.model.ParsedChampionList;
import team.gif.model.riot.ChampionList;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class StaticDataService {
	
	private final RestTemplate restTemplate;
	private final CacheManager cacheManager;
	
	@Autowired
	public StaticDataService(RestTemplate restTemplate, CacheManager cacheManager) {
		this.restTemplate = restTemplate;
		this.cacheManager = cacheManager;
	}
	
	@Cacheable("latestVersion")
	public String getLatestVersionNumber() throws URISyntaxException {
		System.out.println("Not using cached version number");
		String url = "http://ddragon.leagueoflegends.com/api/versions.json";
		
		// TODO: error forwarding
		String[] versions = restTemplate.getForObject(new URI(url), String[].class);
		
		return versions[0];
	}
	
	@Cacheable("championList")
	public ParsedChampionList getChampionList() throws URISyntaxException {
		System.out.println("Not using cached championList");
		String version = getLatestVersionNumber();
		String url = "http://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion.json";
		
		// TODO: error forwarding
		ChampionList rawList = restTemplate.getForObject(new URI(url), ChampionList.class);
		
		return new ParsedChampionList(rawList);
	}
	
	// TODO: turn this into a cron job that runs on Tuesdays?
	@Scheduled(fixedRate = 60000)
	public void clearCache() {
		System.out.println("Clearing cache");
		
		cacheManager.getCacheNames()
				.forEach(cacheName -> cacheManager.getCache(cacheName).clear());
	}
	
	
}
