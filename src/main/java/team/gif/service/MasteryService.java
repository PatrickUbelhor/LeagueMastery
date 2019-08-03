package team.gif.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import team.gif.Config;
import team.gif.model.riot.Mastery;

import java.net.URI;
import java.net.URISyntaxException;

@Service
public class MasteryService {
	
	private final Config config;
	private final RestTemplate restTemplate;
	
	@Autowired
	public MasteryService(Config config, RestTemplate restTemplate) {
		this.config = config;
		this.restTemplate = restTemplate;
	}
	
	public Mastery[] getMasteries(String summonerId) throws URISyntaxException, RestClientException {
		RequestEntity<Void> request = RequestEntity
				.get(new URI("https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/" + summonerId))
				.accept(MediaType.APPLICATION_JSON)
				.header("X-Riot-Token", config.getToken())
				.build();
		
		return restTemplate.exchange(request, Mastery[].class).getBody();
	}
	
}
