<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Big O Notation" FOLDED="false" ID="ID_1232416426" CREATED="1611834099768" MODIFIED="1611834130430"><hook NAME="MapStyle">
    <properties edgeColorConfiguration="#808080ff,#000000ff,#ff0033ff,#009933ff,#3333ffff,#ff6600ff,#cc00ccff,#ffbf00ff,#00ff99ff,#0099ffff,#996600ff,#000000ff,#cc0066ff,#33ff00ff,#ff9999ff,#0000ccff,#cccc00ff,#0099ccff,#006600ff,#ff00ccff,#00cc00ff,#0066ccff,#00ffffff" fit_to_viewport="false"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt" TEXT_SHORTENED="true">
<font SIZE="24"/>
<richcontent TYPE="DETAILS" LOCALIZED_HTML="styles_background_html"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<font SIZE="9"/>
<stylenode LOCALIZED_TEXT="default" ICON_SIZE="12.0 pt" COLOR="#000000" STYLE="bubble" SHAPE_VERTICAL_MARGIN="0.0 pt" TEXT_ALIGN="CENTER" MAX_WIDTH="120.0 pt" MIN_WIDTH="120.0 pt">
<font NAME="Arial" SIZE="9" BOLD="true" ITALIC="false"/>
<edge STYLE="bezier" WIDTH="3"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details">
<font SIZE="11" BOLD="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes" COLOR="#000000" BACKGROUND_COLOR="#ffffff">
<font SIZE="9" BOLD="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT">
<font BOLD="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<font SIZE="9"/>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
<edge COLOR="#0000cc"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<font SIZE="9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" UNIFORM_SHAPE="true" MAX_WIDTH="120.0 pt" MIN_WIDTH="120.0 pt">
<font SIZE="24" ITALIC="true"/>
<edge STYLE="bezier" WIDTH="3"/>
</stylenode>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="accessories/plugins/AutomaticLayout.properties" VALUE="ALL"/>
<font SIZE="24"/>
<hook NAME="AutomaticEdgeColor" COUNTER="0" RULE="FOR_COLUMNS"/>
<node TEXT="Rules" POSITION="right" ID="ID_312513548" CREATED="1611834108882" MODIFIED="1611834280948">
<node TEXT="If an algorithm performs a certain sequence of steps f(N) times for a math-&#xa;ematical function f, it takes O(f(N)) steps." ID="ID_481663740" CREATED="1611834363050" MODIFIED="1611834750780"/>
<node TEXT="If an algorithm performs an operation that takes O(f(N)) steps and then&#xa;performs a second operation that takes O(g(N)) steps for functions f and&#xa;g, the algorithm&#x2019;s total performance is O(f(N) + g(N))" ID="ID_1490136226" CREATED="1611834581507" MODIFIED="1611834583285"/>
<node TEXT="If an algorithm takes O(f(N) + g(N)) and the function f(N) is greater than&#xa;g(N) for large N, the algorithm&#x2019;s performance can be simplifi ed to O(f(N))." ID="ID_307613449" CREATED="1611834635897" MODIFIED="1611834638185"/>
<node TEXT="If an algorithm performs an operation that takes O(f(N)) steps, and for&#xa;every step in that operation it performs another O(g(N)) steps, the algo-&#xa;rithm&#x2019;s total performance is O(f(N) &#xd7; g(N))" ID="ID_1109720755" CREATED="1611834664956" MODIFIED="1611834668509"/>
<node TEXT="Ignore constant multiples. If C is a constant, O(C &#xd7; f(N)) is the same as&#xa;O(f(N)), and O(f(C &#xd7; N)) is the same as O(f(N))" ID="ID_622240019" CREATED="1611834711183" MODIFIED="1611834716046"/>
</node>
<node TEXT="O(N 2 ) is pronounced &#x201c;order N squared.&#x201d; -&gt; &quot;Ordem N ao Quadrado&quot;" POSITION="left" ID="ID_1399154380" CREATED="1611835016271" MODIFIED="1611835036371"/>
</node>
</map>
