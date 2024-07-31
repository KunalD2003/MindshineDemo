const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    // From Post Fields of Admin
    uid: {
        type: String,
        required: true,
        Unique: true,
    },
    provider: {
        type: String,
        require : true,
        enum: ["Google", "Facebook", "Apple", "Email", "Temporary"]  
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    encrypted_password: {
        type: String,
        required: true,
    },
    subscription_plan: {
        type: String,
    },
    subscription_source: {
        type: String,
    },
    subscription_duration:{
        type: String,
    },
    admin_subscription_flag :{
        type: Boolean,
        default: false,
    },
    prevent_automatic_subscription_verification: {
        type: Boolean,
        default: false,
    }, 
    tester:{
        type: Boolean,
        default: false,
    },

    // Other field generate from user or coming from different table
    reset_password_token: {
        type: String,
        default: null,
    },
    reset_password_sent_at: {
        type: String,
        default: null,
    },
    allow_password_change: {
        type: Boolean,
        default: true,
    },
    remember_created_at: {
        type: Boolean,
        default: true,
    },
    sign_in_count: {
        type: Number,
        default: null,
    },
    current_sign_in_at: {
        type: Date,
        default: null
    },  
    last_sign_in_at: {
        type: Date,
        default: null
    },  
    last_sign_in_ip: {
        type: String,
        default: null,
    },
    confirmation_token: {
        type: String,
        default: null,
    },
    confirmed_at: {
        type: Date,
        default: null
    },
    confirmation_sent_at: {
        type: Date,
        default: null
    },
    unconfirmed_email: {
        type: String,
        default: null
    },
    email: {
        type: String,
        default: null
    },
    tokens: {
        type: String,
        default: null
    },
    avatar: {
        type: String,
        default: null
    },
    subscription_plan_verified_at: {

    },
    company_id: {
        type: String,
        default: null
    },
    stripe_id: {
        type: String,
        default: null
    },
    country: {
        type: String,
        default: null
    },
    language: {
        type: String,
        default: null
    },
    session_feedback_enabled: {
        type: Boolean,
        default: true
    },
    language_set_by_user: {
        type: Boolean,
        default: true
    },
    temporary_user_upgraded_at: {
        type: String,
        default: null
    },
    subscription_duration: {
        type: String,
        default: null
    },
    subscription_source: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        default: null
    },
    signup_source: {
        type: String,
        default: null
    },
    mood: {
        type: Number,
        default: null
    },
    subscription_token: {
        type: String,
        default: null
    },
    paypal_id: {
        type: String,
        default: null
    },
    mark_for_deletion: {
        type: Boolean,
        default: false
    },
    has_been_on_7d_trial: {
        type: Boolean,
        default: false
    },
    web_signup_source: {
        type: String,
        default: null
    },
    web_subscription_source: {
        type: String,
        default: null
    },
    onboarded: {
        type: Boolean,
        default: false
    },
    general_notifications_enabled: {
        type: Boolean,
        default: true
    },
    current_app_version: {
        type: String,
        default: null
    },
    subscription_manually_upgraded_at: {
        type: Date,
        default: null
    },
    server_generated_password: {
        type: String,
        default: null
    },
    onboarded_through_funnel: {
        type: Boolean,
        default: false
    },
    onboarded_at: {
        type: Date,
        default: null
    },
    uuid: {
        type: String,
        default: null
    },
    token: {
        type: String,
        default: null
    },

    OnboardingDetails: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "OnboardingCard",
        }
    ]
});

const user = mongoose.model("user", UserSchema);

module.exports = UserModel;
