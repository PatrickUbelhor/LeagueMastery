package team.gif.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.gif.service.MasteryService;

import java.net.URISyntaxException;

@RestController
@RequestMapping(value = "/api/mastery", produces = MediaType.APPLICATION_JSON_VALUE)
public class MasteryController {
	
	@Autowired
	private MasteryService masteryService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/by-summoner/{summonerId}")
	public ResponseEntity<String> getMasteriesBySummoner(@PathVariable String summonerId) throws URISyntaxException {
		return masteryService.getMasteries(summonerId);
	}

}
