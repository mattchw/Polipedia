package com.mattchw.bewater.controller;

import java.util.ArrayList;
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

import com.mattchw.bewater.model.Youtube;
import com.mattchw.bewater.repository.YoutubeRepository;

@CrossOrigin
@RestController
@RequestMapping("/api/v1")
public class YoutubeController {
	@Autowired
	 private YoutubeRepository youtubeRepository;
	
	@RequestMapping("/")
	 public String home() {
		return "Hello World....";
	 }
	@RequestMapping(method = RequestMethod.POST, value = "/youtube")
	 public Youtube createYoutube(@RequestBody Youtube youtube) {
		return youtubeRepository.save(youtube);
	 }
	@RequestMapping(method = RequestMethod.GET, value = "/youtube")
	 public List<Youtube> getAllYoutube() {
		List<Youtube> youtubes = new ArrayList<>();
		youtubeRepository.findAll().forEach(youtubes::add); //fun with Java 8
		return youtubes;
	 }
	@RequestMapping(method = RequestMethod.GET, value = "/youtube/{id}")
	 public Optional<Youtube> getYoutube(@PathVariable long id) {
		return youtubeRepository.findById(id);
	 }
	@RequestMapping(method = RequestMethod.PUT, value = "/youtube/{id}")
	 public ResponseEntity<Youtube> updateYoutube(@PathVariable(value = "id") long id, @Valid @RequestBody Youtube youtube)
	      throws Exception {
	    Youtube findYoutube = youtubeRepository
	            .findById(id)
	            .orElseThrow(() -> new Exception("Youtube not found on :: " + id));
	    
	    System.out.println("id: "+id);
	    
	    System.out.println("description: "+youtube.getDescription());
	    System.out.println("subscrbe: "+youtube.getSubscribe());
	    
	    findYoutube.setDescription(youtube.getDescription());
	    findYoutube.setSubscribe(youtube.getSubscribe());
	    
	    final Youtube updatedYoutube = youtubeRepository.save(findYoutube);
	    return ResponseEntity.ok(updatedYoutube);
	 }
	@RequestMapping(method = RequestMethod.DELETE, value = "/youtube/{id}")
	 public void deleteYoutube(@PathVariable(value = "id") long id)
		      throws Exception {
		youtubeRepository
		        .findById(id)
		        .orElseThrow(() -> new Exception("Youtube not found on :: " + id));
		    
		youtubeRepository.deleteById(id);;
	 }
	
	// for testing
	@RequestMapping(method = RequestMethod.GET, value = "/youtubes")
	 public Page<Youtube> getYotube(
			 @RequestParam(required=false) String keyword,
			 @RequestParam(required=false) List<Integer> stance,
			 @RequestParam(required=false) List<Integer> option,
			 Pageable pageable) {
		System.out.println("keyword: "+keyword);
		if (keyword != null) {
			keyword = keyword.toLowerCase();
		}
		System.out.println("stance: "+stance);
		System.out.println("category: "+option);
		return youtubeRepository.findByStanceAndCategory(keyword,stance,option,pageable);
	 }
	@RequestMapping(method = RequestMethod.GET, value = "/youtubes/all")
	 public Page<Youtube> getAllYotube(
			 @RequestParam(required=false) String keyword,
			 @RequestParam(required=false) List<Integer> stance,
			 @RequestParam(required=false) List<Integer> option,
			 Pageable pageable) {
		if (keyword != null) {
			keyword = keyword.toLowerCase();
		}
		Pageable wholePage = Pageable.unpaged();
		return youtubeRepository.findByStanceAndCategory(keyword,stance,option,wholePage);
	 }
}
