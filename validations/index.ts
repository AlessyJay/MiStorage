import * as z from "zod";

export const managerFormSchema = z
  .object({
    title: z.string().optional(),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    password: z.string().min(4, "Password must be at least 4 characters"),
    passwordConfirmation: z
      .string()
      .min(4, "Password confirmation is required"),
    homePage: z.enum([
      "dashboard",
      "siteMap",
      "gridView",
      "listView",
      "allCustomers",
      "reports",
    ]),
    role: z.enum(["manager", "salesAssociate"]),
    isOwner: z.boolean(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
  });

export type ManagerFormValues = z.infer<typeof managerFormSchema>;

// Setup/Contact page
export const contactFormSchema = z.object({
  facilityName: z.string().min(1, "Facility name is required"),
  websiteAddress: z.string().url("Invalid website address"),
  physicalAddress: z.object({
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
    zip: z.string().min(5, "ZIP code must be at least 5 characters"),
  }),
  billingAddress: z.object({
    address: z.string().min(1, "Address is required"),
    city: z.string().min(1, "City is required"),
    stateProvince: z.string().min(1, "State/Province is required"),
    zipPostalCode: z
      .string()
      .min(5, "ZIP/Postal code must be at least 5 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
  }),
  checkBatch: z.object({
    bankName: z.string().min(1, "Bank name is required"),
    routingNumber: z.string().min(9, "Routing number must be 9 digits").max(9),
    accountNumber: z.string().min(1, "Account number is required"),
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const createFeeFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Amount must be a positive number",
  }),
  taxRate: z.string(),
  customTaxRate: z.string().optional(),
  description: z.string().optional(),
});

export type createFeeFormValues = z.infer<typeof createFeeFormSchema>;

export const editProfileFormSchema = z.object({
  routingNumber: z.string().length(9, "Routing number must be 9 digits"),
  accountNumber: z.string().min(4, "Account number must be at least 4 digits"),
  paymentMethod: z.enum(["personalChecking", "personalSavings"]),
});

export type editProfileFormValues = z.infer<typeof editProfileFormSchema>;

export const promotionFormSchema = z.object({
  name: z.string().min(1, "Promotion name is required"),
  description: z.string().min(1, "Description is required"),
  startDate: z.date().min(new Date(), "Start date must be in the future"),
  endDate: z.date().optional(),
  method: z.enum(["manual", "promoCode", "automatic"]),
  unitTypes: z
    .array(z.string())
    .min(1, "At least one unit type must be selected"),
  discountType: z.enum(["percentage", "amount"]),
  discountValue: z
    .string()
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Discount value must be a positive number",
    }),
  setup: z.string(),
  customSetup: z.string().optional(),
  shouldNotExpire: z.boolean(),
  billingCycles: z.string().optional(),
});

export type PromotionFormValues = z.infer<typeof promotionFormSchema>;
