package com.adobe.aem.guides.wknd.spa.react.core.models;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
  adaptables = Resource.class,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class MySliderInsideMulti {

  @ValueMapValue
  private String sliderImg;

  @ValueMapValue
  private String itemName;

  @ValueMapValue
  private String itemLink;

  public String getSliderImg() {
    return sliderImg;
  }

  public String getItemName() {
    return itemName;
  }

  public String getItemLink() {
    return itemLink;
  }
}
