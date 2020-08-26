package com.mattchw.bewater.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.mattchw.bewater.model.Occupation;
import com.mattchw.bewater.repository.OccupationRepository;

@RestController
@RequestMapping("/api/v1")
public class OccupationController {
	@Autowired
	 private OccupationRepository occupationRepository;
	
	@RequestMapping(method = RequestMethod.POST, value = "/occupation")
	 public Occupation createYoutube(@RequestBody Occupation occupation) {
		return occupationRepository.save(occupation);
	 }
	
	@RequestMapping(method = RequestMethod.GET, value = "/occupation")
	 public List<Occupation> getAllYoutube() {
		List<Occupation> occupations = new ArrayList<>();
		occupationRepository.findAll().forEach(occupations::add); //fun with Java 8
		return occupations;
	 }
	@RequestMapping(method = RequestMethod.PUT, value = "/occupation/{id}")
	 public ResponseEntity<Occupation> updateOccupation(@PathVariable(value = "id") long id, @Valid @RequestBody Occupation occupation)
	      throws Exception {
		Occupation findOccupation = occupationRepository
	            .findById(id)
	            .orElseThrow(() -> new Exception("Occupation not found on :: " + id));
	    
		findOccupation.setName(occupation.getName());
	    
	    final Occupation updatedOccupation = occupationRepository.save(findOccupation);
	    return ResponseEntity.ok(updatedOccupation);
	 }
	@RequestMapping(method = RequestMethod.DELETE, value = "/occupation/{id}")
	 public void deleteOccupation(@PathVariable(value = "id") long id)
		      throws Exception {
		occupationRepository
		        .findById(id)
		        .orElseThrow(() -> new Exception("Occupation not found on :: " + id));
		    
		occupationRepository.deleteById(id);;
	 }
}
