import { Link } from "react-router-dom"

export const Terms = () => {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-16 py-8">
            <h1 className="text-2xl md:text-3xl text-center mb-3">Conditions générales de vente</h1>
            <Paragraph>
                <p className="font-semibold">Préambule. Qui sommes-nous ?</p>
                <p>ExpressFood France S.A.S. est une société dont le siège social est sis [siège social], inscrite au Registre du Commerce et des sociétés (RCS) de [lieu d'inscription au RCS] sous le numéro [numéro RCS] (TVA intracommunautaire [numéro TVA intracommunautaire]. [Code CITEO] (« ExpressFood », « nous » ou « nos »),</p>
                <p>ExpressFood vend et livre :</p>
                <ul>
                    <li>Des paniers repas prêts à cuisiner ou box, sous forme d'abonnement hebdomadaire flexible ;</li>
                    <li>Des paniers repas prêts à cuisiner ou box à l'unité (tels qu'un panier d'essai) ;</li>
                    <li>Des produits frais supplémentaires pouvant être ajoutés de manière ponctuelle à l'abonnement hebdomadaire (tels qu'une corbeille de fruits, un dessert à cuisiner, un produit de l'Epicerie...) ; ci-après le/les “produit(s) supplémentaire(s)”) ;</li>
                    <li>Tout autre produit alimentaire et non alimentaire,</li>
                    <li>des bons-cadeaux, des coupons de réduction et des codes de réduction comme indiqué à l'Article 9.</li>
                </ul>
                <p>
                    Ci-après les « <strong>Produits</strong> »
                    <br />
                    ExpressFood vend ses Produits par le biais de son site Internet <Link to={"/"}>{window.location.origin}</Link> ainsi que par le biais de ventes hors magasin telles que, mais non limitées à, la vente à domicile, la vente en réunion ou encore la vente sur des foires et salons,
                </p>
                <p>Ci-après « <strong>Ventes Directes</strong> »</p>
            </Paragraph>
            <Paragraph>
                <p>1. Champ d'application et modifications des Conditions Générales de Vente de ExpressFood</p>
                <p>1.1. Les présentes Conditions Générales de Vente régissent la fourniture des Produits entre ExpressFood et ses clients (« clients », « client » ou « vous »).<br />Elles sont applicables à l'ensemble des contrats (y compris les abonnements et commandes) que vous concluez avec ExpressFood.</p>
                <p>1.2. Nous nous réservons le droit de modifier les présentes Conditions Générales de Vente. Dans ce cas, nous vous communiquerons, via e-mail et/ou notre newsletter, le contenu des modifications à l'avance, dans un délai de huit (8) jours avant leur entrée en vigueur.</p>
                <p>1.3. Si vous vous opposez aux nouvelles Conditions Générales de Vente, vous avez la possibilité de résilier votre contrat en envoyant un e-mail à l'adresse [adresse e-mail du service client] ou en utilisant les canaux de contact de notre site Internet (voir article 17), dans le respect de l'article 8 « Suspension, Résiliation et rétractation ». Toutefois, si vous ne résiliez pas votre contrat et que vous continuez à utiliser nos Produits à compter de la date d'entrée en vigueur des nouvelles Conditions Générales de Vente, ces dernières s'appliqueront audit contrat à partir de leur date d'entrée en vigueur.</p>
            </Paragraph>
            <Paragraph>
                <p>2. Offre</p>
                <p>2.1. Les Produits proposés, y compris les offres tarifaires, constituent une offre non-contraignante que vous êtes libre d'accepter ou non.</p>
                <p>2.2. Notre offre comprend une description des Produits proposés.</p>
                <p>2.3. Notre offre s'adresse aux utilisateurs finaux. Les Produits commandés, tels que nos paniers repas ou box et autres Produits, ne sont pas destinés à la revente. C'est pourquoi les commandes représentant une quantité anormalement élevée par rapport aux besoins raisonnables d'un ménage pourront être refusées.</p>
            </Paragraph>
            <Paragraph>
                <p>3. Conclusion du contrat</p>
                <p>3.1. Afin de pouvoir passer commande, vous devez vous abonner en créant un compte sur le site ExpressFood; celui-ci vous permettra de gérer vos préférences et vos commandes. Cela vous permettra également de procéder plus rapidement et facilement à vos prochaines commandes. Vous pouvez ainsi préciser vos préférences alimentaires.</p>
                <p>Si vous ne faites pas votre choix de plats ou si vous ne modifiez pas vos préférences alimentaires en temps et en heure, vos plats seront automatiquement sélectionnés. Votre compte vous permet également d'ajouter des produits frais supplémentaires de manière ponctuelle et /ou des plats complémentaires, dans certains cas contre un coût additionnel.</p>
                <p>3.2. En tant que client, vous pouvez soumettre une demande en remplissant et en confirmant le bon de commande fourni par ExpressFood sur son site Internet. Une confirmation immédiate de votre demande vous sera alors envoyée par voie électronique. Toutefois, votre commande ne sera considérée comme acceptée qu'à compter de l'envoi, par ExpressFood, d'un email de confirmation de la commande.</p>
                <p>3.3. Jusqu'à 23h59 le jour de votre commande, ExpressFood se réserve le droit de refuser la demande à tout moment, sans motiver sa décision. Ce n'est qu'après ce délai et l'acceptation de la demande par ExpressFood que vous bénéficiez d'un droit à la livraison des Produits commandés. ExpressFood pourra néanmoins annuler une commande dans les cas prévus aux articles 2.3. et 13.2.</p>
                <p>3.4. Vous certifiez avoir la capacité de contracter. ExpressFood ne vend pas ses produits aux personnes âgées de moins de dix-huit (18) ans.</p>
                <p>3.5. Le contrat peut être conclu pour une durée indéterminée (l'abonnement) ou déterminée (l'ajout de produits supplémentaires à la box repas).</p>
                <p>3.6. ExpressFood peut ajouter des échantillons promotionnels offerts dans les paniers repas/box. Le fait qu'ExpressFood annonce sur les réseaux sociaux que des échantillons promotionnels sont offerts n'ouvre aucun droit à la réception de tels échantillons.</p>
            </Paragraph>
            <Paragraph>
                <p>4. Obligations pesant sur les clients</p>
                <p>4.1. Vous reconnaissez avoir préalablement pris connaissance et accepté sans restriction les présentes Conditions Générales de Vente.</p>
            </Paragraph>
        </div>
    )
}

const Paragraph = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="space-y-4 mb-3">{children}</div>
    )
}