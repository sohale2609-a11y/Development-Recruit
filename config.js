/*
  Development Recruit · connection settings
  -----------------------------------------
  Paste the two values from your Supabase project here
  (Supabase → Project Settings → API Keys). See README.md, step 3.

  The publishable key is safe to put on a public website: the database
  security rules only let visitors submit forms, read open roles and
  see the visitor total. Never put your "secret" key here.
*/
window.DR_CONFIG = {
  supabaseUrl: "https://erexlhzmgbtmbsaygjvi.supabase.co",
  supabaseKey: "sb_publishable_ElRqQZUZOoHgjET8o0t1AA_GRFhirw8",

  // Show the visitor counter in the website footer. Set to false to hide it
  // from visitors; you'll still see the numbers in your dashboard.
  showVisitorCounter: true,

  // Your scheduling page for the "Book a call" buttons, for example
  // "https://calendly.com/your-name/30min". Leave it empty and the buttons
  // open the consultation request form instead.
  bookingUrl: "",

  // Until the database is connected, forms open the visitor's email app,
  // addressed to this email, instead of saving to the database.
  contactEmail: "sohailakhtar135@hotmail.com"
};
