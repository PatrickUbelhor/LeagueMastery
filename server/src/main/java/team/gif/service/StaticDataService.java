package team.gif.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team.gif.model.ChampionList;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class StaticDataService {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Value("${riot.api.version}")
	private String version;
	
	public String getLatestVersionNumber() throws URISyntaxException {
		String url = "http://ddragon.leagueoflegends.com/api/versions.json";
		
		// TODO: error forwarding
		String[] versions = restTemplate.getForEntity(new URI(url), String[].class).getBody();
		return versions[0];
	}
	
	public ResponseEntity<ChampionList> getChampionList() throws URISyntaxException {
		String url = "http://ddragon.leagueoflegends.com/cdn/" + version + "/data/en_US/champion.json";
		
		return restTemplate.getForEntity(new URI(url), ChampionList.class);
	}
	
}
