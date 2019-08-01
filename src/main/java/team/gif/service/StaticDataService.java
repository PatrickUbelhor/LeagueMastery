package team.gif.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team.gif.model.ParsedChampionList;
import team.gif.model.riot.ChampionList;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class StaticDataService {
	
	private static final Logger logger = LogManager.getLogger(StaticDataService.class);
	private final RestTemplate restTemplate;
	
	@Autowired
	public StaticDataService(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}
	
	@Cacheable("latestVersion")
	public String getLatestVersionNumber() throws URISyntaxException {
		logger.info("Retrieving and caching latest version number");
		
		String url = "http://ddragon.leagueoflegends.com/api/versions.json";
		
		// TODO: error forwarding
		String[] versions = restTemplate.getForObject(new URI(url), String[].class);
		
		return versions[0];
	}
	
	@Cacheable("championList")
	public ParsedChampionList getChampionList(String version) throws URISyntaxException {
		logger.info("Retrieving and caching new ParsedChampionList");
		
		String url = "http://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion.json";
		
		// TODO: error forwarding
		ChampionList rawList = restTemplate.getForObject(new URI(url), ChampionList.class);
		
		return new ParsedChampionList(rawList);
	}
	
	
}
