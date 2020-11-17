package com.mattchw.polipedia.model;

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
@Table(name = "person")
public class Person{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name= "id", columnDefinition = "serial")
	private long id;
	
	@Column(name = "name")
	private String name;
	
    @Column(name = "stance")
    private int stance;
    
    @Column(name = "description")
    private String description;
    
    @Column(name = "profile")
    private String profile;
    
    @OneToMany(cascade=CascadeType.ALL, mappedBy="personId", fetch = FetchType.LAZY)
	private List<PersonOccupation> occupation;

	public List<PersonOccupation> getOccupation() {
		return occupation;
	}

	public void setOccupation(List<PersonOccupation> occupation) {
		this.occupation = occupation;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public String getProfile() {
		return profile;
	}

	public void setProfile(String profile) {
		this.profile = profile;
	}
	
	public void printPerson() {
		System.out.println("Id: "+this.id);
		System.out.println("Name: "+this.name);
		System.out.println("Stance: "+this.stance);
		System.out.println("Description: "+this.description);
		System.out.println("profile: "+this.profile);
	}
    
}
