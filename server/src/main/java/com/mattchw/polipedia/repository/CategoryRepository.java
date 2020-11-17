package com.mattchw.polipedia.repository;

import org.springframework.data.repository.CrudRepository;

import com.mattchw.polipedia.model.Category;

public interface CategoryRepository extends CrudRepository<Category, Long>{

}