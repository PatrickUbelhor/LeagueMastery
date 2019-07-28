package team.gif.model;

import team.gif.model.riot.Champion;
import team.gif.model.riot.ChampionList;

import java.util.HashMap;

public class ParsedChampionList {
	
	private HashMap<Integer, Champion> championMap;
	
	public ParsedChampionList(ChampionList rawList) {
		championMap = new HashMap<>();
		rawList.getData()
				.values()
				.forEach(champion -> championMap.put(Integer.valueOf(champion.getKey()), champion));
	}
	
	public Champion getChampion(int key) {
		return championMap.get(key);
	}
	
}
