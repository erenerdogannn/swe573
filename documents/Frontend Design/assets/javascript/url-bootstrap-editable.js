(function ($) {

    var Address = function (options) {
        this.init('address', options, Address.defaults);
    };

    //inherit from Abstract input
    $.fn.editableutils.inherit(Address, $.fn.editabletypes.abstractinput);

    $.extend(Address.prototype, {
        /**
         Renders input from tpl


         @method render()
         **/
        render: function () {
            this.$input = this.$tpl.find('input');
        },

        /**
         Default method to show value in element. Can be overwritten by display option.

         @method value2html(value, element)
         **/
        value2html: function (value, element) {
            if (!value || value == undefined || value.data == undefined) {
                $(element).empty();
                return;
            }


            var html = "";
            var endPosition = value.data.length;
            var commaPositions = 1;


            $.each(value.data, function (index, url) {

                for (var i = 0; i < offers.length; i++) {
                    if (offers[i].id == url.offers_id) {
                        html += offers[i].name;
                    }
                }

                for (var i = 0; i < endpoints.length; i++) {
                    if (endpoints[i].id == url.endpoints_id) {
                        html += " (" + endpoints[i].name + ")";
                    }
                }


                if (commaPositions != endPosition) {
                    html += ", ";
                } else {
                    console.log('reached');

                }
                ++commaPositions;
            });

            var url_options = "";

            if (value.is_rotate && value.is_rotate != 0)
                url_options += '<i class="rotation-icon on" title="Rotate is active">R</i>';

            if (value.is_conversion && value.is_conversion != 0)
                url_options += '<i class="rotation-icon on" title="Conversion Based Redirection is Active">C</i>';


            if (value.is_noredirect && value.is_noredirect != 0)
                url_options += '<i class="no-redirection-icon off" title="Noredirect is active. Be careful">NR</i>';

            if (url_options != "")
                url_options = "&nbsp;" + url_options;


            //$($(".rule-options", $(element).parent())).html(url_options);
            $(element).html(html + url_options);


        },


        /**
         Gets value from element's html

         @method html2value(html)
         **/
        html2value: function (html) {
            return null;
        },

        /**
         Converts value to string.
         It is used in internal comparing (not for sending to server).

         @method value2str(value)
         **/
        value2str: function (value) {
            return JSON.stringify(value);
        },

        /*
         Converts string to value. Used for reading value from 'data-value' attribute.

         @method str2value(str)
         */
        str2value: function (str) {
            if (str == "")
                return {data: [], is_rotate: false, is_conversion: false, is_noredirect: false, noredirect_value: ""};

            return str;
        },

        /**
         Sets value of input.

         @method value2input(value)
         @param {mixed} value
         **/
        value2input: function (value) {
            if (!value || value == undefined) {
                return;
            }

            if (value.is_rotate == true) {
                $("#rotation").prop("checked", true);
            } else {
                $("#rotation").prop("checked", false);
            }

            if (value.is_conversion == true) {
                $("#conversion").prop("checked", true);
            } else {
                $("#conversion").prop("checked", false);
            }


            if (value.is_noredirect == true) {
                $("#no-redirect").prop("checked", true);
                $("#noredirect_value").val(value.noredirect_value);
                $("#noredirect_hide").show();
            } else {
                $("#no-redirect").prop("checked", false);
            }

            $("#url-list").empty();

            for (var i = 0; i < value.data.length; i++) {
                add_url(value.data[i]);
            }

        },

        /**
         Returns value of input.

         @method input2value()
         **/
        input2value: function () {

            var result = {};

            var data = [];
            $("#url-list tr").each(function () {
                var weight = $('[name="weight"]', this).val();
                var offers_id = $('[name="offers_id"]', this).val();
                var endpoints_id = $('[name="endpoints_id"]', this).val();
                var extra1 = $('[name="extra1"]', this).val();
                var extra2 = $('[name="extra2"]', this).val();


                data.push({
                    weight: weight,
                    offers_id: offers_id,
                    endpoints_id: endpoints_id,
                    extra1: extra1,
                    extra2: extra2
                });
            });

            result.data = data;
            result.is_rotate = $("#rotation").is(":checked");
            result.is_conversion = $("#conversion").is(":checked");
            result.is_noredirect = $("#no-redirect").is(":checked");
            result.noredirect_value = $("#noredirect_value").val();

            return result;
        },

        /**
         Activates input: sets focus on the first field.

         @method activate()
         **/
        activate: function () {
            this.$input.filter('[name="value"]').focus();
        }
    })
    ;

    Address.defaults = $.extend({}, $.fn.editabletypes.abstractinput.defaults, {

        tpl: '' +
        '<div class="row">' +
        '<table class="table table-editable" style="width: 790px !important;">' +
        '<thead><tr><th style="width: 80px !important;"><span id="ordered_txt">Weight</span></th><th style="width: 120px !important;">Offer</th><th style="width: 200px !important;">Endpoint</th><th style="width: 120px !important;">Extra</th><th style="width: 120px !important;">Extra2</th><th style="width: 25px"></th></tr></thead>' +
        '<tbody id="url-list">' +
        '</tbody>' +
        '</table>' +
        '</div>' +
        '<a onclick="add_url()" class="add-url-button">' +
        '+ Add New</a>' +
        '<br/>' +
        '<div class="rotation-holder">' +
        '<div class="rotation-item">' +
        '<label class="form-label">Rotation' +
        ' <a href="#" tabindex="0" class="info-button" role="button" data-trigger="focus" data-toggle="popover" data-html="true" title="Rotation" data-content="If you define one or more urls for your rules, a returning visitor will be redirected other urls. For example, there are 3 urls for a rule : a,b,c.  In first time, visitor will be redirected to random url based on ratio settings. Lets say a. In other visiting, the user will be redirected to b or c based on ratio settings."> </a>' +
        '</label>' +
        '<div class="onoffswitch">' +
        '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="rotation">' +
        '<label class="onoffswitch-label" for="rotation">' +
        '<span class="onoffswitch-inner"></span>' +
        '<span class="onoffswitch-switch"></span>' +
        '</label>' +
        '</div>' +
        '</div>' +
        '<div class="rotation-item">' +
        '<label class="form-label">Conv. Redir.' +
        ' <a href="#" tabindex="0" class="info-button" role="button" data-trigger="focus" data-toggle="popover" data-html="true" title="Conversion Based Redirection" data-content=""> </a>' +
        '</label>' +
        '<div class="onoffswitch">' +
        '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="conversion">' +
        '<label class="onoffswitch-label" for="conversion">' +
        '<span class="onoffswitch-inner"></span>' +
        '<span class="onoffswitch-switch"></span>' +
        '</label>' +
        '</div>' +
        '</div>' +
        '<div class="rotation-item">' +
        '<label class="form-label">No-Redirection' +
        '<a href="#" tabindex="0" class="info-button" role="button" data-trigger="focus" data-toggle="popover" data-html="true" title="No-redirect" data-content="If this is enabled, it prevents to redirect your returning user. This may be useful when you using javascript code, so your visitors will not redirect in every time."></a>' +
        '</label>' +
        '<div class="onoffswitch">' +
        '<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="no-redirect">' +
        '<label class="onoffswitch-label" for="no-redirect">' +
        '<span class="onoffswitch-inner"></span>' +
        '<span class="onoffswitch-switch"></span>' +
        '</label>' +
        '</div>' +
        '<span id="noredirect_hide" style="display:none;"><input class=" form-text thin" id="noredirect_value" value="">  &nbsp; hours</span>' +
        '</div>' +
        ' </div>',
        inputclass: '',
    });


    $.fn.editabletypes.address = Address;

}(window.jQuery));

function offer_changed(e) {

    var elem = $(e);
    $(elem.parent().parent().find("select")[1]).html('<option value="">Select Endpoint</option>');
    for (var i = 0; i < endpoints.length; i++) {
        if (endpoints[i].offers_id == elem.val() && endpoints[i].type == campaign_type) {
            $(elem.parent().parent().find("select")[1]).append('<option value="' + endpoints[i].id + '">' + endpoints[i].name + '</option>');
        }
    }
}

function add_url(url) {

    if (url === undefined) {
        var append_string = '<tr>' +
            '<td><input type="text" class="form-control input-small" name="weight" style="width: 80px; margin-left: 2px;" value="1"></td>' +
            '<td width="120" style="width: 120px"><select name="offers_id" class="form-control" onchange="offer_changed(this)" required><option value="">Select Offer</option>';
        for (var i = 0; i < offers.length; i++) {
            append_string += '<option value="' + offers[i].id + '">' + offers[i].name + '</option>';
        }
        append_string +=
            '</select></td>' +
            '<td class="value"><select name="endpoints_id" class="form-control" required><option value="">Select Endpoint</option></select></td>' +
            '<td class="extra"><input type="text" name="extra1" class="input-medium form-text" placeholder="{extra1}"></td>' +
            '<td class="extra"><input type="text" name="extra2" class="input-medium form-text" placeholder="{extra2}"></td>' +
            '<td class="delete-item"><a class="delete-item-button" href="#"><i class="fa fa-trash-o"></i></a></td>' +
            '</tr>';
        $("#url-list").append(append_string);
    } else {
        var append_string = '<tr>';
        /*
         type;
         weight;
         value;
         extra;
         option;*/
        var append_string = '<tr>' +
            '<td><input type="text" class="form-control input-small" name="weight" style="width: 80px; margin-left: 2px;" value="' + url.weight + '"></td>' +
            '<td width="120" style="width: 120px"><select name="offers_id" class="form-control" onchange="offer_changed(this)" required><option value="">Select Offer</option>';
        for (var i = 0; i < offers.length; i++) {
            if (offers[i].id == url.offers_id)
                append_string += '<option value="' + offers[i].id + '" selected>' + offers[i].name + '</option>';
            else
                append_string += '<option value="' + offers[i].id + '">' + offers[i].name + '</option>';
        }
        append_string +=
            '</select></td>' +
            '<td class="value"><select name="endpoints_id" class="form-control" required><option value="">Select Endpoint</option>';
        for (var i = 0; i < endpoints.length; i++) {
            if (endpoints[i].offers_id == url.offers_id && endpoints[i].type == campaign_type) {
                if (endpoints[i].id == url.endpoints_id) {
                    append_string += '<option value="' + endpoints[i].id + '" selected>' + endpoints[i].name + '</option>'
                } else {
                    append_string += '<option value="' + endpoints[i].id + '">' + endpoints[i].name + '</option>'
                }
            }
        }
        append_string +=
            '</select></td>' +
            '<td class="extra"><input type="text" name="extra1" class="input-medium form-text" placeholder="{extra1}" value="' + url.extra1 + '"></td>' +
            '<td class="extra"><input type="text" name="extra2" class="input-medium form-text" placeholder="{extra2}" value="' + url.extra2 + '"></td>' +
            '<td class="delete-item"><a class="delete-item-button" href="#"><i class="fa fa-trash-o"></i></a></td>' +
            '</tr>';
        $("#url-list").append(append_string);

    }

    $('.selectpicker').selectpicker();

}

$(document).on("change", "#no-redirect", function () {
    if ($(this).is(':checked')) {
        $("#noredirect_hide").show();
    } else {
        $("#noredirect_hide").hide();
    }
});

$(document).on("change", "#rotation", function () {
    if ($(this).is(':checked')) {
        $("#ordered_txt").html("Order");
    } else {
        $("#ordered_txt").html("Weight");
    }
});


$(document).on("change", "#conversion", function () {
    if ($(this).is(':checked')) {
        $("#ordered_txt").html("Order");
    } else {
        $("#ordered_txt").html("Weight");
    }
});

