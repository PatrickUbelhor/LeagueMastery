package team.gif.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import team.gif.Config;
import team.gif.model.riot.Mastery;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class MasteryService {
	
	@Autowired
	private Config config;
	
	@Autowired
	private RestTemplate restTemplate;
	
	public Mastery[] getMasteries(String summonerId) throws URISyntaxException {
		RequestEntity<Void> request = RequestEntity
				.get(new URI("https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + summonerId))
				.accept(MediaType.APPLICATION_JSON)
				.header("X-Riot-Token", config.getToken())
				.build();
		
		// TODO: Error forwarding
		return restTemplate.exchange(request, Mastery[].class).getBody();
	}
	
}
