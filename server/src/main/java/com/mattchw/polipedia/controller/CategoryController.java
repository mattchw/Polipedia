package com.mattchw.polipedia.controller;

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

import com.mattchw.polipedia.model.Category;
import com.mattchw.polipedia.repository.CategoryRepository;

@RestController
@RequestMapping("/api/v1")
public class CategoryController {
	@Autowired
	 private CategoryRepository categoryRepository;

	@RequestMapping(method = RequestMethod.POST, value = "/category")
	 public Category createYoutube(@RequestBody Category category) {
		return categoryRepository.save(category);
	 }
	
	@RequestMapping(method = RequestMethod.GET, value = "/category")
	 public List<Category> getAllYoutube() {
		List<Category> categories = new ArrayList<>();
		categoryRepository.findAll().forEach(categories::add); //fun with Java 8
		return categories;
	 }
	@RequestMapping(method = RequestMethod.PUT, value = "/category/{id}")
	 public ResponseEntity<Category> updateCategory(@PathVariable(value = "id") long id, @Valid @RequestBody Category category)
	      throws Exception {
		Category findCategory = categoryRepository
	            .findById(id)
	            .orElseThrow(() -> new Exception("cATEGORY not found on :: " + id));
	    
		findCategory.setName(category.getName());
	    
	    final Category updatedCategory = categoryRepository.save(findCategory);
	    return ResponseEntity.ok(updatedCategory);
	 }
	@RequestMapping(method = RequestMethod.DELETE, value = "/category/{id}")
	 public void deleteCategory(@PathVariable(value = "id") long id)
		      throws Exception {
		categoryRepository
		        .findById(id)
		        .orElseThrow(() -> new Exception("Category not found on :: " + id));
		    
		categoryRepository.deleteById(id);;
	 }
}
