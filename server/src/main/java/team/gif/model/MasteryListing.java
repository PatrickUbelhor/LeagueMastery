package team.gif.model;

import lombok.Data;

@Data
public class MasteryListing {
	
	private final Integer id;
	private final String iconUrl;
	private final String name;
	private final Integer level;
	private final Long points;
	
}
