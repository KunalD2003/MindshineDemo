const mongoose = require("mongoose"); 

const WelcomeSchema = new mongoose.Schema({
    WelcomeScreen_CTAEn: {
        type: String,
        default: null
    },
    WelcomeScreen_CTADe:{
        type: String,
        default: null
    },
    WelcomeScreen_HeadlineEn:{
        type: String,
        default: null
    },
    WelcomeScreen_HeadlineDe:{
        type: String,
        default: null
    },
    WelcomeScreen_SubHeadlineEn:{
        type: String,
        default: null
    },
    WelcomeScreen_SubHeadlineDe:{
        type: String,
        default: null
    },
    WelcomeScreen_SubHeadline2En:{
        type: String,
        default: null
    },
    WelcomeScreen_SubHeadline2De:{
        type: String,
        default: null
    },
    WelcomeScreen_AlternativeSignupCtaTextEn: {
        type: String,
        default: null
    },
    WelcomeScreen_AlternativeSignupCtaTextDe: {
        type: String,
        default: null
    },
    WelcomeScreen_HeaderImageURL:{
        type: String,
        default: null
    },
    WelcomeScreen_VideoLinkEn:{
        type: String,
        default: null
    },
    WelcomeScreen_VideoLinkDe:{
        type: String,
        default: null
    },
})
const CardContentSchema = new mongoose.Schema({
    CardContent_HeroImage:{
        type: String,
    },
    CartContent_HeroHeadingEn:{
        type: String,
    },
    CartContent_HeroHeadingDe:{
        type: String,
    },
    CartContent_HeroBodyEn:{
        type: String,
    },
    CartContent_HeroBodyDe:{
        type: String,
    },
    CartContent_Section1Image:{
        type: String,
    },
    CartContent_Section1Heading:{
        type: String,
    },
    CartContent_Section1Body:{
        type: String,
    },
})
const JoinNewsLetterSchema = new mongoose.Schema({
    JoinNewsLetterOptIn_Show: {
        type: String
    },
    JoinNewsLetterOptIn_CopyEn: {
        type: String
    },
    JoinNewsLetterOptIn_CopyDe: {
        type: String
    },
})
const TrainingReminderSchema = new mongoose.Schema({
    TrainingRemindersOptIn_Show: {
        type: String
    },
    TrainingRemindersOptIn_CopyEn: {
        type: String
    },
    TrainingRemindersOptIn_CopyDe: {
        type: String
    },
})
const AppTrackingSchema = new mongoose.Schema({
    AppTrackingOptIn_Show: {
        type: String
    },
    AppTrackingOptIn_CopyEn: {
        type: String
    },
    AppTrackingOptIn_CopyDe: {
        type: String
    },
})
const NameScreenSchema = new mongoose.Schema({
    NameScreenHeadline_En: {
        type: String
    },
    NameScreenHeadline_De: {
        type: String
    },
    NameScreenSubHeadline_En: {
        type: String
    },
    NameScreenSubHeadline_De: {
        type: String
    },
    NameScreenCTA_En: {
        type: String
    },
    NameScreenCTA_De: {
        type: String
    },
})
const SignupSchema = new mongoose.Schema({
    SignupHeaderImageUrl: {
        type: String
    },
    SignupHeadlineEn: {
        type: String
    },
    SignupHeadlineDe: {
        type: String
    },
    SignupBodyEn: {
        type: String
    },
    SignupBodyDe: {
        type: String
    },
    SignupCTAEn: {
        type: String
    },
    SignupCTADe: {
        type: String
    },
})
const LoginSchema = new mongoose.Schema({
    LoginHeaderImageUrl: {
        type: String
    },
    LoginHeadlineEn: {
        type: String
    },
    LoginHeadlineDe: {
        type: String
    },
    LoginBodyEn: {
        type: String
    },
    LoginBodyDe: {
        type: String
    },
    LoginCTAEn: {
        type: String
    },
    LoginCTADe: {
        type: String
    },
})




const OnboardingCardSchema = new mongoose.Schema({
    CardType: {
        type: String,
        required: true,
        enum: ["Multichoice-SingleAnswer","MultiChoice-MultiAnswer", "Statement", "Video", "Dropdown", "Payment Screen", "Review", "Consent", "Splash", "Low Friction", "Password", "Signup"]
    },
    CardName: {
        type: String,
        require : true
    },
    GA4ScreenTitle: {
        type: String,
    },
    CardPosition: {
        type: Number,
        required: true,
    },
    LinkedToCard: {
        type: String,
        required: true,
    },
    LinkedToCardOption: {
        type: String,
        required: true,
    },
    isHiddenEn: {
        type: Boolean,
        default: false,
    },
    isHiddenDe: {
        type: Boolean,
        default: false,
    },
    isMandatory: {
        type: Boolean,
        default: false,
    },
    isLinkedCard: {
        type: Boolean,
        default: false,
    },
    isLoginWithEmail: {
        type: Boolean,
        default: false,
    },
    isProgressBarHidden: {
        type: Boolean,
        default: false,
    },
    ScreenPosition: {
        type: Number,
        default: null
    },
    ScreenNumberTotal: {
        type: Number,
        default: null
    },

    // Welcome Screen Content
    WelcomeScreen: {
        type: WelcomeSchema,
        default: null
    },
    
    CardContent: {
        type: CardContentSchema,
        default: null
    },
    
    JoinNewsLetter: {
        type: JoinNewsLetterSchema,
        default: null
    },

    TrainingReminder: {
        type: TrainingReminderSchema,
        default: null
    },
    
    AppTracking: {
        type: AppTrackingSchema,
        default: null
    },
    
    Image_GIf: {
        type: String,
        default: null
    },

    NameScreen:{
        type: NameScreenSchema,
        default: null
    },

    Signup: {
        type: SignupSchema,
        default: null
    },
    Login: {
        type: LoginSchema,
        default: null
    },
    
    OnboardingOptions:[{
        AnswerOptionTextEn: {
            type: String,
            default: null
        },
        AnswerOptionTextDe: {
            type: String,
            default: null
        },
        LinkedCard: {
            type: String,
            default: null
        },
        ImageURL: {
            type: String,
            default: null
        },
        Order: {
            type: Number,
            default: null
        },
        SessionID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SessionModel",
            default: null,
        },
        RecommendedCourseId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Session",
            default: null,
        },
        RecommendedCourseModelId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "RecommendedCourseModel",
            default: null,
        },
        HeadlineEn: {
            type: String,
            default: null
        },
        HeadlineDe: {
            type: String,
            default: null
        },
        CopyEn: {
            type: String,
            default: null
        },
        CopyDe: {
            type: String,
            default: null
        },
        TextEn: {
            type: String,
            default: null
        },
        TextDe: {
            type: String,
            default: null
        },
        BodyEn:{
            type: String,
            default: null
        },
        BodyDe:{
            type: String,
            default: null
        },
        UserNameEn:{
            type: String,
            default: null
        },
        UserNameDe:{
            type: String,
            default: null
        },
        Position:{
            type: String,
            default: null
        },
    },
],
    FunnelId:{
        type: mongoose.Schema.Types.ObjectId,
        Ref: "FunnelModel",
        required: true
    },
});

const OnboardingCard = mongoose.model("OnboardingCard", OnboardingCardSchema);

module.exports = OnboardingCard;