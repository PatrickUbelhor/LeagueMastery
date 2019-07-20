package team.gif.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team.gif.model.ChampionProcessor;
import team.gif.model.riot.ChampionList;

import java.net.URI;
import java.net.URISyntaxException;

@Service()
public class StaticDataService {
	
	@Autowired
	private RestTemplate restTemplate;
	
	public String getLatestVersionNumber() throws URISyntaxException {
		String url = "http://ddragon.leagueoflegends.com/api/versions.json";
		
		String[] versions = restTemplate.getForObject(new URI(url), String[].class);
		
		return versions[0];
	}
	
	public ChampionList getChampionList() throws URISyntaxException {
		String version = getLatestVersionNumber();
		String url = "http://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion.json";
		
		// TODO: error forwarding
		return restTemplate.getForEntity(new URI(url), ChampionList.class).getBody();
	}
	
	public void updateChampionList() throws URISyntaxException {
		ChampionProcessor.getInstance().updateChampionMap(getChampionList());
	}
	
}
