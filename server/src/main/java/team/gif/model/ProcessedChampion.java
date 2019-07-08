package team.gif.model;

import java.util.HashMap;

public class ProcessedChampion {
	
	private HashMap<Integer, Champion> championMap = new HashMap<>();
	
	public ProcessedChampion(ChampionList champs) {
		champs.getData().values()
				.forEach(champion -> championMap.put(Integer.valueOf(champion.getKey()), champion));
	}
	
	public Champion getChampion(int key) {
		return championMap.get(key);
	}
	
}
