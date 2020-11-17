package com.mattchw.polipedia.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mattchw.polipedia.model.Person;
import com.mattchw.polipedia.repository.PersonRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class PersonController {
	@Autowired
	 private PersonRepository personRepository;
	
	@RequestMapping(method = RequestMethod.POST, value = "/person")
	 public Person createPerson(@RequestBody Person person) {
		person.printPerson();
		return personRepository.save(person);
	 }
	
	@RequestMapping(method = RequestMethod.GET, value = "/person")
	 public Page<Person> getAllPerson(Pageable pageable) {
		return personRepository.findAll(pageable); //fun with Java 8
	 }
	@RequestMapping(method = RequestMethod.GET, value = "/person/{id}")
	 public Optional<Person> getPerson(@PathVariable long id) {
		return personRepository.findById(id);
	 }
	
	@RequestMapping(method = RequestMethod.PUT, value = "/person/{id}")
	 public ResponseEntity<Person> updatePerson(@PathVariable(value = "id") long id, @Valid @RequestBody Person person)
	      throws Exception {
		Person findPerson = personRepository
	            .findById(id)
	            .orElseThrow(() -> new Exception("Person not found on :: " + id));
	    
		findPerson.setName(person.getName());
		findPerson.setStance(person.getStance());
		findPerson.setProfile(person.getProfile());
		findPerson.setDescription(person.getDescription());
	    
	    final Person updatedPerson = personRepository.save(findPerson);
	    return ResponseEntity.ok(updatedPerson);
	 }
	@RequestMapping(method = RequestMethod.DELETE, value = "/person/{id}")
	 public void deletePerson(@PathVariable(value = "id") long id)
		      throws Exception {
		personRepository
		        .findById(id)
		        .orElseThrow(() -> new Exception("Person not found on :: " + id));
		    
		personRepository.deleteById(id);
	 }
	
	// for testing
	@RequestMapping(method = RequestMethod.GET, value = "/persons")
	 public Page<Person> getPersonByOccupation(
			 @RequestParam(required=false) String keyword,
			 @RequestParam(required=false) List<Integer> stance,
			 @RequestParam(required=false) List<Integer> option,
			 Pageable pageable) {
		System.out.println("keyword: "+keyword);
		if (keyword != null) {
			keyword = keyword.toLowerCase();
		}
		System.out.println("stance: "+stance);
		System.out.println("occupaton: "+option);
		return personRepository.findByStanceAndOccupation(keyword,stance,option,pageable);
	 }
	@RequestMapping(method = RequestMethod.GET, value = "/persons/all")
	 public Page<Person> getAllPersonByOccupation(
			 @RequestParam(required=false) String keyword,
			 @RequestParam(required=false) List<Integer> stance,
			 @RequestParam(required=false) List<Integer> option,
			 Pageable pageable) {
		if (keyword != null) {
			keyword = keyword.toLowerCase();
		}
		Pageable wholePage = Pageable.unpaged();
		return personRepository.findByStanceAndOccupation(keyword,stance,option,wholePage);
	 }
}
