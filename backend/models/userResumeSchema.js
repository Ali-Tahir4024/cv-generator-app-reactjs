const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userResumeSchema = new Schema({
  userFirstName: String,
  userSecondName: String,
  userGender: String,
  userAge: String,
  userProfession: String,
  userLocation: String,
  userPhoneNumber: String,
  userEmail: String,
  userHouseAddress: String,
  userProfileDescription: String,
  userFirstProfileWebsite: String,
  userGitHubProfileName: String,
  userSecondProfileWebsite: String,
  userThirdProfileWebsite: String,
  userTwitterInProfileName: String,
  userFourthProfileWebsite: String,
  userPersonalWebsiteLink: String,
  userHighSchoolDegreeName: String,
  userHighSchoolName: String,
  userHighSchoolEndingDate: String,
  userCollegeDegreeName: String,
  userCollegeName: String,
  userCollegeEndingDate: String,
  userBachelorDegreeName: String,
  userUniversityName: String,
  userBachelorEndingDate: String,
  user1stExperience: String,
  user1stExperienceStartingDate: String,
  user1stExperienceEndingDate: String,
  user2ndExperience: String,
  user2ndExperienceStartingDate: String,
  user2ndExperienceEndingDate: String,
  user3rdExperience: String,
  user3rdExperienceStartingDate: String,
  user3rdExperienceEndingDate: String,
  userSkills: String,
});

const UserResumeSchema = mongoose.model("UserResumeData", userResumeSchema);

module.exports = UserResumeSchema;
