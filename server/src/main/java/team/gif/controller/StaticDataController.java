package team.gif.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.gif.model.Champion;
import team.gif.model.ChampionList;
import team.gif.service.StaticDataService;

import java.net.URISyntaxException;

@RestController
@RequestMapping(value = "/api/data", produces = MediaType.APPLICATION_JSON_VALUE)
public class StaticDataController {
	
	
	@Autowired
	private StaticDataService staticDataService;
	
	@CrossOrigin(origins = "*")
	@GetMapping("/champions")
	public ResponseEntity<ChampionList> getAllChampions() throws URISyntaxException {
		return staticDataService.getChampionList();
	}
	
	
	@CrossOrigin(origins = "*")
	@GetMapping("/champions/{name}")
	public ResponseEntity<Champion> getChampion(@PathVariable String name) throws URISyntaxException {
		ChampionList list = staticDataService.getChampionList().getBody();
		
		Champion champ = list.getData().get(name);
		
		return ResponseEntity.ok(champ);
	}
	
}
