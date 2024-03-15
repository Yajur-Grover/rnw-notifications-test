const Notifications = Windows.UI.Notifications;
const ToastTemplateType = Notifications.ToastTemplateType;
const ToastNotificationManager = Notifications.ToastNotificationManager;
const ToastNotification = Notifications.ToastNotification;

export function showNotification(notification) {
  var type = notification.template;

  var notificationObject = {};
  if (typeof notification === 'string') {
    notificationObject.text = notification;
  } else {
    notificationObject = notification;
  }

  if (notificationObject.template != undefined) {
    type = notificationObject.template;
  }

  var xml = ToastNotificationManager.getTemplateContent(type);
  for (var tagName in notificationObject) {
    var xmlElements = xml.getElementsByTagName(tagName);
    var value = notificationObject[tagName];
    console.log(tagName);
    if (typeof value === 'string') {
      fillXmlElements(xml, xmlElements, [value]);
    } else if (Array.isArray(value)) {
      fillXmlElements(xml, xmlElements, value);
    } else if (typeof value === 'object') {
      fillXmlElements(xml, xmlElements, [value]);
    }
  }

  var toast = new ToastNotification(xml);
  toast.priority = Notifications.ToastNotificationPriority.high;
  ToastNotificationManager.createToastNotifier().show(toast);
}

function createToast(notification) {
  
}


function fillXmlElements(xml, xmlElements, arr) {
  var i = 0;
  for (var arrValue of arr) {
    var node = xmlElements[i];
    if (typeof arrValue === 'string') {
      node.appendChild(xml.createTextNode(arrValue + ' \n'));
    } else if (typeof arrValue === 'object') {
      for (var attrName in arrValue) {
        var attr = node.attributes.getNamedItem(attrName);
        if (!attr) {
          attr = xml.createAttribute(attrName);
          node.attributes.setNamedItem(attr);
        }

        attr.nodeValue = arrValue[attrName];
      }
    }
  }
}
