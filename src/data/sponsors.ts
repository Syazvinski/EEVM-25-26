export const sponsors = [
  ["Accenture", "accenture_logo"], ["AWS", "aws_logo"], ["BECU", "becu_logo"], ["City of Atlanta", "city_of_atlanta_logo"],
  ["Coca-Cola", "coca_cola_logo"], ["Emory CEI", "emory_cei_logo"], ["Georgia-Pacific", "georgia_pacific_logo"], ["GitHub", "github_logo"],
  ["Goizueta Business School", "goizueta_business_school_logo"], ["Goizueta CEI", "goizueta_cei_logo"], ["Google", "google_logo"], ["The Home Depot", "home_depot_logo"],
  ["IBM", "ibm_logo"], ["Insomnia Cookies", "insomnia_cookies_logo"], ["Invesco", "invesco_logo"], ["Lyft", "lyft_logo"],
  ["Meta", "meta_logo"], ["Microsoft", "microsoft_logo"], ["Porsche", "porsche_logo"], ["ProductATL", "productatl_logo"],
  ["Red Bull", "red_bull_logo"], ["Stripe", "stripe_logo"], ["Synovus", "synovus_logo"], ["TAG", "tag_logo"],
].map(([name, file]) => ({ name, logo: `/sponsors/${file}.webp` }));
