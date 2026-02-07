// Image imports for recipe cards
import Affogato from "../assets/food/affogato.jpg";
import Chawanmushi from "../assets/food/chawanmushi.webp";
import ChocolateCups from "../assets/food/chocolatcups.jpg";
import CoconutMatcha from "../assets/food/coconutmatcha.webp";
import CreamyMatchaPasta from "../assets/food/CreamyMatchaPasta.jpg";
import Gyoza from "../assets/food/gyoza.jpeg";
import IcedMatchaEspresso from "../assets/food/icedmatchaespresso.jpg";
import Koicha from "../assets/food/koicha.jpg";
import MacaronMatcha from "../assets/food/magarongmatcha.jpg";
import MatchaBrownies from "../assets/food/matchabrownies.jpg";
import MatchaChocolateBall from "../assets/food/matchachocolateball.webp";
import MatchaCookies from "../assets/food/matchacookies.jpg";
import MatchaLava from "../assets/food/matchalava.jpg";
import MatchaRoseLatte from "../assets/food/matcharoselatte.jpg";
import MatchaYuzu from "../assets/food/matchayuzu.jpg";
import MatchaCheesecake from "../assets/food/cheesecake.jpg";
import NamaMatcha from "../assets/food/namematcha.jpg";
import Noodles from "../assets/food/noodles.avif";
import Ochazuke from "../assets/food/ochazuke.jpg";
import Onigiri from "../assets/food/onigiri.jpg";
import PanacottaMatcha from "../assets/food/panacottamatcha.jpg";
import PoundCake from "../assets/food/poundcake.avif";
import Risotto from "../assets/food/risotto.jpg";
import Tiramisu from "../assets/food/tiramisu.jpg";
import Usucha from "../assets/food/usucha.jpeg";
import WhiteChoc from "../assets/food/whitechoc.png";

// Map recipe titles to their local images
const imageMap = {
    "Creamy Matcha Pasta": CreamyMatchaPasta,
    "Matcha Risotto": Risotto,
    "Ochazuke": Ochazuke,
    "Matcha Chawanmushi": Chawanmushi,
    "Matcha Onigiri": Onigiri,
    "Matcha Gyoza": Gyoza,
    "Matcha Soba Noodles": Noodles,
    "Iced Matcha Espresso": IcedMatchaEspresso,
    "Koicha (Thick Matcha)": Koicha,
    "Usucha (Thin Matcha)": Usucha,
    "Matcha Rose Latte": MatchaRoseLatte,
    "Coconut Matcha Drink": CoconutMatcha,
    "Matcha Yuzu Sparkler": MatchaYuzu,
    "Matcha Basque Cheesecake": MatchaCheesecake,
    "Matcha Tiramisu": Tiramisu,
    "Matcha Brownies": MatchaBrownies,
    "Matcha White Choc Cookies": MatchaCookies,
    "Matcha Panna Cotta": PanacottaMatcha,
    "Matcha Affogato": Affogato,
    "Matcha Lava Cake": MatchaLava,
    "Nama Matcha Chocolate": NamaMatcha,
    "Matcha Macarons": MacaronMatcha,
    "Matcha Chocolate Cups": ChocolateCups,
    "Matcha Chocolate Balls": MatchaChocolateBall,
    "Matcha Pound Cake": PoundCake,
    "Matcha White Chocolate Bark": WhiteChoc,
};

// Get image for a recipe by title
export function getRecipeImage(title) {
    return imageMap[title] || null;
}

export default imageMap;
