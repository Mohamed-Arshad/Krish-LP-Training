package com.arshad.rentacar.demoapplication;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.boot.actuate.endpoint.annotation.Selector;
import org.springframework.boot.actuate.endpoint.annotation.WriteOperation;
import org.springframework.stereotype.Component;

@Component
@Endpoint(id="stage")
public class StageEndpoint {
	
	Map<String,stage> stages=new ConcurrentHashMap<>();
	
	@ReadOperation
	public Map<String,stage> getAllstage(){
		return stages;
	}
	
	@ReadOperation
	public stage getstage(@Selector String name) {
		return stages.get(name);
	}
	
	@WriteOperation
	public void setstage(@Selector String name, int value) {
		stages.put(name, new stage(value));
	}
	
	static class stage {
		int value;

		public stage(int value) {
			this.value = value;
		}

		public int getValue() {
			return value;
		}

		public void setValue(int value) {
			this.value = value;
		}
		
	}
}
