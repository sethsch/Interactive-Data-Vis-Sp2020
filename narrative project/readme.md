

# Project prospectus

For this project, I want to design a tool that hilights developing policy responses to COVID-19 by governments across the globe.  I will draw from data from the Coronanet Research Project that's actively being collected by a team of 200+ researchers from around the world, led by  NYU Abu Dhabi, TU Munich, Yale University.

The data yields detailed information about which governments are responding to the coronavirus, who they are targeting the policies toward, how they are doing it, and when they are doing it.  It includes information about the level of government responding (e.g. national, regional/state, local/municipal), the types of actions taken, the compliance mechanisms and the timing of policy responses as it relates to the number of confirmed cases, deaths and recoveries.  The researchers are publishing the data alongside other relevant country-level political indices such as press freedoms and citizens' perception of corruption, which may yield interesting ways to analyze and curate how policymaking unfolds differently across the globe.

I hope to incorporate cartographic and time-series elements to create an interactive display so that the text-based events data will appear in such a way as to convey the developing stories.


## Sources / Ideas

### Data: 
- Cheng, Cindy, Joan Barcelo, Allison Hartnett, Robert Kubinec, and Luca Messerschmidt. 2020. “Coronanet: A Dyadic Dataset of Government Responses to the COVID-19 Pandemic.” BETAVersion 1.0. https://www.coronanet-project.org

### Graphic elements:
- AmCharts Covid Dashboard: https://covid.amcharts.com/   The layout, with the map/globe behind the chart semi-transluscent chart below it, is akin to what I'd like to figure out in d3 at least in part.
- Rolling Globe package: https://boscoh.github.io/rolling-globe/
- Multi-category rolling time chart: https://bl.ocks.org/boeric/6a83de20f780b42fadb9  This could be useful for diplaying multiple categories of events as they play out in time.
- AmCharts Bent Gantt chart: https://www.amcharts.com/demos/bent-gantt-chart/?theme=dark This could be cool if the globe was above the time line instead of the clock.
- AmCharts Horizontal Serpentine chart: https://www.amcharts.com/demos/horizontal-serpentine-chart/?theme=dark This might get messy if there are too many categories, but it could create an interesting visual scheme that facilitates comparisons of how different sequences of policy decisions take place.

### Data exploration/mockup:
- Tableau data browser dash: https://public.tableau.com/profile/seth.schimmel#!/vizhome/covid_policy_dash/Descriptionbrowser2






