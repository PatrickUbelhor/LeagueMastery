package team.gif.model;

import lombok.Data;

import java.util.HashMap;

@Data
public class ChampionList {
	
	private final String type;
	private final String format;
	private final String version;
	private final HashMap<String, Champion> data;
	
}
