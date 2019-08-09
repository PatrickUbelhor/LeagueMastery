package team.gif.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import team.gif.Config;
import team.gif.model.ParsedSummoner;
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
	
	public ParsedSummoner getSummonerByName(String name, String region) throws URISyntaxException, RestClientException {
		RequestEntity<Void> request = RequestEntity
				.get(new URI("https://" + region + ".api.riotgames.com/lol/summoner/v4/summoners/by-name/" + name))
				.accept(MediaType.APPLICATION_JSON)
				.header("X-Riot-Token", config.getToken())
				.build();
		
		Summoner rawSummoner = Objects.requireNonNull(restTemplate.exchange(request, Summoner.class).getBody());
		return new ParsedSummoner(rawSummoner);
	}
	
}
