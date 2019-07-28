package team.gif.model.riot;

import lombok.Data;

import java.util.HashMap;

@Data
public class ChampionList {
	
	private String type;
	private String format;
	private String version;
	private HashMap<String, Champion> data;
	
}
