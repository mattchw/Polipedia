package com.mattchw.bewater.model;

import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.TypeDef;

import com.vladmihalcea.hibernate.type.array.IntArrayType;;

@TypeDef(
	name = "int-array",
	typeClass = IntArrayType.class
)
@MappedSuperclass
public class BaseEntity {

}
