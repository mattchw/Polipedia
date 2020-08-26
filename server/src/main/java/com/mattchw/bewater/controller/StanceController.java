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

import com.mattchw.bewater.model.Stance;
import com.mattchw.bewater.repository.StanceRepository;

@RestController
@RequestMapping("/api/v1")
public class StanceController {
	@Autowired
	 private StanceRepository stanceRepository;
	
	@RequestMapping(method = RequestMethod.POST, value = "/stance")
	 public Stance createYoutube(@RequestBody Stance stance) {
		return stanceRepository.save(stance);
	 }
	
	@RequestMapping(method = RequestMethod.GET, value = "/stance")
	 public List<Stance> getAllYoutube() {
		List<Stance> stances = new ArrayList<>();
		stanceRepository.findAll().forEach(stances::add); //fun with Java 8
		return stances;
	 }
	@RequestMapping(method = RequestMethod.PUT, value = "/stance/{id}")
	 public ResponseEntity<Stance> updateStance(@PathVariable(value = "id") long id, @Valid @RequestBody Stance stance)
	      throws Exception {
	    Stance findStance = stanceRepository
	            .findById(id)
	            .orElseThrow(() -> new Exception("Stance not found on :: " + id));
	    
	    findStance.setName(stance.getName());
	    
	    final Stance updatedStance = stanceRepository.save(findStance);
	    return ResponseEntity.ok(updatedStance);
	 }
	@RequestMapping(method = RequestMethod.DELETE, value = "/stance/{id}")
	 public void deleteStance(@PathVariable(value = "id") long id)
		      throws Exception {
		stanceRepository
		        .findById(id)
		        .orElseThrow(() -> new Exception("Stance not found on :: " + id));
		    
		stanceRepository.deleteById(id);;
	 }
}
