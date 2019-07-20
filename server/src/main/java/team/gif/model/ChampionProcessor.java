package team.gif.model;

import team.gif.model.riot.Champion;
import team.gif.model.riot.ChampionList;

import java.net.URISyntaxException;
import java.util.HashMap;

public class ChampionProcessor {
	
	private static ChampionProcessor instance = null;
	
	public synchronized static ChampionProcessor getInstance() throws URISyntaxException {
		
		// TODO: Double null check
		if (instance == null) {
			// TODO: call service
			instance = new ChampionProcessor();
		}
		
		return instance;
	}
	
	
	private HashMap<Integer, Champion> championMap;
	
	private ChampionProcessor() {
		championMap = new HashMap<>();
	}
	
	public Champion getChampion(int key) {
		return championMap.get(key);
	}
	
	public void updateChampionMap(ChampionList champions) {
		champions.getData()
				.values()
				.forEach(champion -> championMap.put(Integer.valueOf(champion.getKey()), champion));
	}
	
}
