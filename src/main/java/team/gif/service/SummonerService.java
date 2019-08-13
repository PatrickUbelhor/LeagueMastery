package team.gif.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;
import team.gif.Config;
import team.gif.exception.SummonerNotFoundException;
import team.gif.model.riot.Summoner;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Objects;

@Service
public class SummonerService {
	
	private final Config config;
	private final RestTemplate restTemplate;
	
	@Autowired
	public SummonerService(Config config, RestTemplate restTemplate) {
		this.config = config;
		this.restTemplate = restTemplate;
	}
	
	public Summoner getSummonerByName(String name, String region) throws URISyntaxException {
		RequestEntity<Void> request = RequestEntity
				.get(new URI("https://" + region + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name))
				.accept(MediaType.APPLICATION_JSON)
				.header("X-Riot-Token", config.getToken())
				.build();
		
		ResponseEntity<Summoner> response;
		try {
			response = restTemplate.exchange(request, Summoner.class);
			
		} catch (HttpStatusCodeException e) {
			throw (e.getStatusCode() == HttpStatus.NOT_FOUND)
					? new SummonerNotFoundException(name)
					: e;
		}
		
		return Objects.requireNonNull(response).getBody();
	}
	
}
