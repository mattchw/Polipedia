package com.mattchw.polipedia.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "youtube")
public class Youtube{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "id", columnDefinition = "serial")
	private long id;
	 
	@Column(name = "id_youtube")
	private String youtubeId;
	
	@Column(name = "name")
	private String name;
	
    @Column(name = "stance")
    private int stance;
	 
	@Column(name = "profile")
    private String profile;
	
	@Column(name = "description")
    private String description;
	
	@Column(name = "subscribe")
    private String subscribe;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="youtubeId", fetch = FetchType.LAZY)
	private List<YoutubeOwner> owners;
	
	@OneToMany(cascade=CascadeType.ALL, mappedBy="youtubeId", fetch = FetchType.LAZY)
	private List<YoutubeCategory> category;
	
	@Column(name = "last_update")
	private Date lastUpdate;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getYoutubeId() {
		return youtubeId;
	}

	public void setYoutubeId(String youtubeId) {
		this.youtubeId = youtubeId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getStance() {
		return stance;
	}

	public void setStance(int stance) {
		this.stance = stance;
	}

	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getSubscribe() {
		return subscribe;
	}

	public void setSubscribe(String subscribe) {
		this.subscribe = subscribe;
	}

	public List<YoutubeOwner> getOwners() {
		return owners;
	}

	public void setOwners(List<YoutubeOwner> owners) {
		this.owners = owners;
	}

	public List<YoutubeCategory> getCategory() {
		return category;
	}

	public void setCategory(List<YoutubeCategory> category) {
		this.category = category;
	}

	public Date getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}
	
}
