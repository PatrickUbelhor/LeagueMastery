package team.gif.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team.gif.model.ParsedChampionList;
import team.gif.model.riot.ChampionList;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class StaticDataService {
	
	private final RestTemplate restTemplate;
	
	@Autowired
	public StaticDataService(RestTemplate restTemplate) {
		this.restTemplate = restTemplate;
	}
	
	public String getLatestVersionNumber() throws URISyntaxException {
		String url = "http://ddragon.leagueoflegends.com/api/versions.json";
		
		// TODO: error forwarding
		String[] versions = restTemplate.getForObject(new URI(url), String[].class);
		
		return versions[0];
	}
	
	public ParsedChampionList getChampionList() throws URISyntaxException {
		String version = getLatestVersionNumber();
		String url = "http://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion.json";
		
		// TODO: error forwarding
		ChampionList rawList = restTemplate.getForObject(new URI(url), ChampionList.class);
		
		return new ParsedChampionList(rawList);
	}
	
}
