package team.gif.service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import team.gif.model.ParsedChampionList;
import team.gif.model.riot.ChampionList;

import java.util.Objects;

@Service
public class StaticDataService {
	
	private static final Logger logger = LogManager.getLogger(StaticDataService.class);
	private final RestTemplate restTemplate;
	
	@Autowired
	public StaticDataService(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}
	
	@Cacheable("latestVersion")
	public String getLatestVersionNumber() throws RestClientException {
		logger.info("Retrieving and caching latest version number");
		
		String url = "http://ddragon.leagueoflegends.com/api/versions.json";
		
		String[] versions = Objects.requireNonNull(restTemplate.getForObject(url, String[].class));
		return versions[0];
	}
	
	@Cacheable("championList")
	public ParsedChampionList getChampionList(String version) throws RestClientException {
		logger.info("Retrieving and caching new ParsedChampionList");
		
		String url = "http://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion.json";
		
		ChampionList rawList = Objects.requireNonNull(restTemplate.getForObject(url, ChampionList.class));
		return new ParsedChampionList(rawList);
	}
	
	
}
