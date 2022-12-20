package com.adobe.aem.guides.wknd.spa.react.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;

@Model(
  adaptables = SlingHttpServletRequest.class,
  adapters = { Footer.class, ComponentExporter.class },
  resourceType = Footer.SLING_SERVLET_RESOURCE_TYPES,
  defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(
  name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
  extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class Footer implements ComponentExporter {

  static final String SLING_SERVLET_RESOURCE_TYPES =
    "wknd-spa-react/components/footer";

  public String getSrc() {
    return "hello";
  }

  @Override
  public String getExportedType() {
    return Footer.SLING_SERVLET_RESOURCE_TYPES;
  }
}
