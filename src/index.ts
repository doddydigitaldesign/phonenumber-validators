const isValidMobileTelephoneNumber ="/^0(?<mobilePrefix>70|72|73|76|79)(?:-?)(?<mobileSubscriber>[0-9]{7})$/";
const isValidLandlineTelephoneNumber = "/^(?<swedishAreaCode>0981|0980|0978|0977|0976|0975|0973|0971|0970|0961|0960|0954|0953|0952|0951|0950|0943|0942|0941|0940|0935|0934|0933|0932|0930|0929|0928|0927|0926|0925|0924|0923|0922|0921|0920|0918|0916|0915|0914|0913|0912|0911|0910|090|08|0696|0695|0693|0692|0691|0690|0687|0684|0682|0680|0672|0671|0670|0663|0662|0661|0660|0657|0653|0652|0651|0650|0647|0645|0644|0643|0642|0640|063|0624|0623|0622|0621|0620|0613|0612|0611|060|0591|0590|0589|0587|0586|0585|0584|0583|0582|0581|0580|0573|0571|0570|0565|0564|0563|0560|0555|0554|0553|0552|0551|0550|054|0534|0533|0532|0531|0530|0528|0526|0525|0524|0523|0522|0521|0520|0515|0514|0513|0512|0511|0510|0506|0505|0504|0503|0502|0501|0500|0499|0498|0496|0495|0494|0493|0492|0491|0490|0486|0485|0481|0480|0479|0478|0477|0476|0474|0472|0471|0470|046|0459|0457|0456|0455|0454|0451|044|0435|0433|0431|0430|042|0418|0417|0416|0415|0414|0413|0411|0410|040|0393|0392|0390|0383|0382|0381|0380|0372|0371|0370|036|035|0346|0345|0340|033|0325|0322|0321|0320|031|0304|0303|0302|0301|0300|0297|0295|0294|0293|0292|0291|0290|0281|0280|0278|0271|0270|026|0258|0253|0251|0250|0248|0247|0246|0243|0241|0240|023|0227|0226|0225|0224|0223|0222|0221|0220|021|019|018|0176|0175|0174|0173|0171|016|0159|0158|0157|0156|0155|0152|0151|0150|0144|0143|0142|0141|0140|013|0125|0123|0122|0121|0120|011)(?:-?)(?<landlineSubscriber>[0-9]{5,14})$/";
const isValidInternationalMobileNumber = "/^(?<internationalPrefix>\+|00)(?<countryCode>999|998|997|996|995|994|993|992|991|990|979|978|977|976|975|974|973|972|971|970|969|968|967|966|965|964|963|962|961|960|899|898|897|896|895|894|893|892|891|890|889|888|887|886|885|884|883|882|881|880|879|878|877|876|875|874|873|872|871|870|859|858|857|856|855|854|853|852|851|850|839|838|837|836|835|834|833|832|831|830|809|808|807|806|805|804|803|802|801|800|699|698|697|696|695|694|693|692|691|690|689|688|687|686|685|684|683|682|681|680|679|678|677|676|675|674|673|672|671|670|599|598|597|596|595|594|593|592|591|590|509|508|507|506|505|504|503|502|501|500|429|428|427|426|425|424|423|422|421|420|389|388|387|386|385|384|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|296|295|294|293|292|291|290|289|288|287|286|285|284|283|282|281|280|269|268|267|266|265|264|263|262|261|260|259|258|257|256|255|254|253|252|251|250|249|248|247|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|219|218|217|216|215|214|213|212|211|210|98|95|94|93|92|91|90|86|84|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1)(?<mobilePrefix>70|72|73|76|79)(?:-?)(?<mobileSubscriber>[0-9]{7})$/g";
const isValidInternationalLandlineNumber = "/^(?<internationalPrefix>\+|00)(?<countryCode>999|998|997|996|995|994|993|992|991|990|979|978|977|976|975|974|973|972|971|970|969|968|967|966|965|964|963|962|961|960|899|898|897|896|895|894|893|892|891|890|889|888|887|886|885|884|883|882|881|880|879|878|877|876|875|874|873|872|871|870|859|858|857|856|855|854|853|852|851|850|839|838|837|836|835|834|833|832|831|830|809|808|807|806|805|804|803|802|801|800|699|698|697|696|695|694|693|692|691|690|689|688|687|686|685|684|683|682|681|680|679|678|677|676|675|674|673|672|671|670|599|598|597|596|595|594|593|592|591|590|509|508|507|506|505|504|503|502|501|500|429|428|427|426|425|424|423|422|421|420|389|388|387|386|385|384|383|382|381|380|379|378|377|376|375|374|373|372|371|370|359|358|357|356|355|354|353|352|351|350|299|298|297|296|295|294|293|292|291|290|289|288|287|286|285|284|283|282|281|280|269|268|267|266|265|264|263|262|261|260|259|258|257|256|255|254|253|252|251|250|249|248|247|246|245|244|243|242|241|240|239|238|237|236|235|234|233|232|231|230|229|228|227|226|225|224|223|222|221|220|219|218|217|216|215|214|213|212|211|210|98|95|94|93|92|91|90|86|84|82|81|66|65|64|63|62|61|60|58|57|56|55|54|53|52|51|49|48|47|46|45|44|43|41|40|39|36|34|33|32|31|30|27|20|7|1)(?<intlAreaCode>[012345689]{1,3})(?:-?)(?<landlineSubscriber>[0-9]{5,14})$/g";

export const phoneNumberValidators = () => {
    const mobile = new RegExp(isValidMobileTelephoneNumber, 'g');
    const landline = new RegExp(isValidLandlineTelephoneNumber,'g');
    const intlMobile = new RegExp(isValidInternationalMobileNumber, 'g');
    const intlLandline = new RegExp(isValidInternationalLandlineNumber, 'g');

    return {
        mobile,
        landline,
        intlMobile,
        intlLandline
    }
}