Template.jobExpiredAlert.helpers({
  expired: function() {
    if (this.userId === Meteor.userId()) {
      if ((this.createdAt < daysUntilExpiration()) && (this.updatedAt < daysUntilExpiration())) {
        return true;
      } else if ((this.createdAt < daysUntilExpiration()) && (this.updatedAt === undefined)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
});

Template.jobStatusToggle.helpers({
  "statuses": function() {
    return STATUSES;
  }
});

Template.jobStatusToggle.events({
  "click .set-status": function(event, template) {
    event.preventDefault();
    Meteor.call("adminSetJobStatus", template.data._id, String(this));
  }
});


Template.jobFeatured.events({
  "click #buy-featured": function(event, template) {
    event.preventDefault();
    var job = template.data;
    var btn = $(event.currentTarget);
    btn.button('loading');
  }
});
