const mongoose = require("mongoose");

const trainingPlanSchema = mongoose.Schema({
  TitleEn: {
    type: String,
    default: null
  },
  TitleDe: {
    type: String,
    default: null
  },
  Hidden: {
    type: Boolean,
    default: null
  },
  BasicCourse: {
    type: Boolean,
    default: null
  },
  MasterClassCourse: {
    type: Boolean,
    default: null
  },
  New: {
    type: Boolean,
    default: null
  },
  Free: {
    type: Boolean,
    default: null
  },
  Position: {
    type: Number,
    default: null
  },
  RequirePenAndPaper: {
    type: Boolean,
    default: null
  },
  MaleCover: {
    type: String,
    default: null
  },
  FemaleCover: {
    type: String,
    default: null
  },
  OtherCover: {
    type: String,
    default: null
  },
  Image: {
    type: String,
    default: null
  },
  ImageV2: {
    type: String,
    default: null
  },
  MasterClassCover: {
    type: String,
    default: null
  },
  TrailerVideo: {
    type: String,
    default: null
  },
  DescriptionEn: {
    type: String,
    default: null
  },
  DescriptionDe: {
    type: String,
    default: null
  },
  ShortDescriptionEn: {
    type: String,
    default: null
  },
  ShortDescriptionDe: {
    type: String,
    default: null
  },
  DurationEn: {
    type: Number,
    default: null
  },
  DurationDe: {
    type: Number,
    default: null
  },
  CoachName: {
    type: String,
    default: null
  },
  CoachProfileParagraph1En: {
    type: String,
    default: null
  },
  CoachProfileParagraph1De: {
    type: String,
    default: null
  },
  CoachProfileParagraph2En: {
    type: String,
    default: null
  },
  CoachProfileParagraph2De: {
    type: String,
    default: null
  },
  CoachProfileParagraph3En: {
    type: String,
    default: null
  },
  CoachProfileParagraph3De: {
    type: String,
    default: null
  },
  ResultsAndBenefitsEn: {
    type: String,
    default: null
  },
  ResultsAndBenefitsDe: {
    type: String,
    default: null
  },
  TagsID: {
    type: Number,
    default: null
  },
  CompletionMessageEn: {
    type: String,
    default: null
  },
  CompletionMessageDe: {
    type: String,
    default: null
  },
  GoalBoosterStep1TitleEn: {
    type: String,
    default: null
  },
  GoalBoosterStep1TitleDe: {
    type: String,
    default: null
  },
  Partner: {
    type: String,
    default: null
  },
  CategoriesId: {
    type: Number,
    default: null
  },
  TrainingModulesId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "TrainingModuleModel",
    default: null
  }]
});

const TrainingPlanModel = mongoose.model("TrainingPlanModel", trainingPlanSchema);
module.exports = TrainingPlanModel;