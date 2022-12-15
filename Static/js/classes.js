/*More relevant in the next part*/

class User{
  constructor(Username, Name, Password, Mail, Phone, Description, Image) {
    this.UserName=Username;
    this.Name=Name;
    this.Password=Password;
    this.Mail=Mail;
    this.Phone=Phone;
    this.Description=Description;
    this.Image=Image;
  }
}

class CommunityEvent{
  constructor(EventNumber, EventName, Purpose, InitiatorName, StartDate, EndDate, BeginningTime, EndTime, Location,
              MinimumVolunteers, MaximumVolunteers, RequiredEquipment, PhoneNumber, Notes) {
    this.EventNumber=EventNumber;
    this.EventName=EventName;
    this.Purpose=Purpose;
    this.InitiatorName=InitiatorName;
    this.StartDate=StartDate;
    this.EndDate=EndDate;
    this.BeginningTime=BeginningTime;
    this.EndTime=EndTime;
    this.Location=Location;
    this.MinimumVolunteers=MinimumVolunteers;
    this.MaximumVolunteers=MaximumVolunteers;
    this.RequiredEquipment=RequiredEquipment;
    this.PhoneNumber=PhoneNumber;
    this.Notes=Notes;
  }
}

class Image{
  constructor(ImageId, ImagePath) {
    this.ImageId=ImageId;
    this.ImagePath=ImagePath;
  }
}

class VolunteeringRegistration{
  constructor(RegistrationID, Volunteer, Association, Date, Hour) {
    this.RegistrationID=RegistrationID;
    this.Volunteer=Volunteer;
    this.Association=Association;
    this.Date=Date;
    this.Hour=Hour;
  }
}

class Volunteer{
  constructor(Username, Name, Password, Mail, Phone, Description, Image,Age,Gender) {
    this.UserName=Username;
    this.Name=Name;
    this.Password=Password;
    this.Mail=Mail;
    this.Phone=Phone;
    this.Description=Description;
    this.Image=Image;
    this.Age=Age;
    this.Gender=Gender;
  }
}
class Association{
  constructor(Username, Name, Password, Mail, Phone, Description, Image,Type,LocationAssociation,FoundationDate,
              ActiveVol,URLAso,AssociationDays,AssociationHours) {
    this.UserName=Username;
    this.Name=Name;
    this.Password=Password;
    this.Mail=Mail;
    this.Phone=Phone;
    this.Description=Description;
    this.Image=Image;
    this.Type=Type;
    this.LocationAssociation=LocationAssociation;
    this.FoundationDate=FoundationDate;
    this.ActiveVol=ActiveVol;
    this.URLAso=URLAso;
    this.AssociationDays=AssociationDays;
    this.AssociationHours=AssociationHours;
  }
  getActivityTime(){
    return `${this.AssociationDays}${this.AssociationHours}`
  }
}
