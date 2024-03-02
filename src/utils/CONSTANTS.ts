export const PATH = {
  root: "root",
  home: "home",
  register: "register",
  login: "Login",
  profile: "profile",
  help: "help",
  calendar: "calendar",
} as const;

export const REQUEST_MESSAGES = {
  409: "L'utilisateur existe déjà",
  500: "Une erreur réseau est survenue",
  404: "Aucun utilisateur trouvé, vérifiez votre email",
  401: "Utilisateur non autorisé, vérifiez votre mot de passe",
} as const;
