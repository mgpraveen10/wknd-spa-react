package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import java.util.Collection;

public interface MySliderInter extends ComponentExporter {
  public Collection<MySliderInsideMulti> getSlider();

  public String getSliderText();

  public String getSliderLink();

  public String getSliderHeadline();
}
