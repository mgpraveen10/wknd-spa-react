package com.adobe.aem.guides.wknd.spa.react.core.models.impl;

import com.adobe.aem.guides.wknd.spa.react.core.models.MySliderInsideMulti;
import com.adobe.aem.guides.wknd.spa.react.core.models.MySliderInter;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import java.util.Collection;
import javax.annotation.PostConstruct;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { MySliderInter.class, ComponentExporter.class },
  resourceType = MySliderImpl.RESOURCE_TYPE_SLIDER,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class MySliderImpl implements MySliderInter {

  static final String RESOURCE_TYPE_SLIDER =
    "wknd-spa-react/components/customized-components/myslider";

  @ChildResource(name = "sliderItems")
  Collection<MySliderInsideMulti> sliderItems;

  @ValueMapValue
  private String sliderText;

  @ValueMapValue
  private String sliderLink;

  @ValueMapValue
  private String sliderHeadline;

  @PostConstruct
  protected void init() {
    sliderItems = CollectionUtils.emptyIfNull(this.sliderItems);
  }

  @Override
  public String getExportedType() {
    return MySliderImpl.RESOURCE_TYPE_SLIDER;
  }

  @Override
  public Collection<MySliderInsideMulti> getSlider() {
    return sliderItems;
  }

  @Override
  public String getSliderText() {
    return sliderText;
  }

  @Override
  public String getSliderLink() {
    return sliderLink;
  }

  @Override
  public String getSliderHeadline() {
    return sliderHeadline;
  }
}
