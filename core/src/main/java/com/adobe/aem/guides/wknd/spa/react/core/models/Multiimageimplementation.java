package com.adobe.aem.guides.wknd.spa.react.core.models;

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




@Model(adaptables = SlingHttpServletRequest.class, adapters = { ComponentExporter.class,
        Multiimageimplementation.class }, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL, resourceType = Multiimageimplementation.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class Multiimageimplementation implements ComponentExporter {

    protected static final String RESOURCE_TYPE = "wknd-spa-react/components/customized-components/multicardlink";

    @ValueMapValue
    private String heading;

    @ValueMapValue
    private String subtitle;

    @ValueMapValue
    private String subtitlelink;

    // Multifield Child Resource for social links
    @ChildResource(name = "items1")
    Collection<Multiimage> items1;

    @PostConstruct
    protected void init() {
        items1 = CollectionUtils.emptyIfNull(this.items1);
    }

    public String getHeading() {
        return heading;
    }

    public String getSubtitle() {
        return subtitle;
    }

    public String getSubtitlelink() {
        return subtitlelink;
    }

    public Collection<Multiimage> getItems1() {
        return items1;
    }

    @Override
    public String getExportedType() {
        return Multiimageimplementation.RESOURCE_TYPE;
    }

}
