!
function() {
    function a() {
        var a = this;
        this.init = function() {
            $(document).ready(function() {
                var b = $("<div class='expander-siv'></div>");
                a.siv = b,
                $("div.expander-siv").length || $("body").append(b),
                $("img[data-expander]").each(function() {
                    var c = $(this);
                    c.attr("src", c.attr("src") + "?" + (new Date).getTime()),
                    c.load(function() {
                        var b = $(this).attr("data-expander"),
                        c = $("<div data-expanderContainer></div>");
                        if (c.addClass("expander-container"), b = b.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '), b = b ? JSON.parse(b) : {},
                        b.animation && c.addClass(b.animation), b.theme || (b.theme = "dark", c.addClass("theme"), c.addClass("dark"), $("div.expander-siv").addClass("dark"), $("div.expander-siv").addClass("theme")), b.speed || (b.speed = "normal"), b.url) {
                            var d = $(this).clone();
                            d.attr("src", b.url + "?" + (new Date).getTime()),
                            c.append(d)
                        } else {
                            if ($(this).attr('video')) {
                                c.append('<video src="'+$(this).attr('video')+'" class="video_class" preload="none" poster controls></video>');
                            } else {
                                c.append($(this).clone())
                                c.addClass("img_flag")
                            }
                        };
                        $(c).children().width($(this).outerWidth() * 1.5);
                        // $(c).children().height($(this).outerHeight() * 1.5);
                        c.data("options", b),
                        c.data("original", {
                            parent: $(this),
                            position: $(this).offset()
                        }),
                        c.css({
                            position: "absolute",
                            width: $(this).outerWidth(),
                            height: $(this).outerHeight(),
                            top: $(this).offset().top,
                            left: $(this).offset().left
                        }),

                        $(this).data("container", c),
                        c.addClass("anim-" + b.speed),

                        $("body").append(c),
                        $(this).on("click", function(e) {
                            a.pop($(this).data("container"), e)
                        }),
                        c.on("click", function(e) {
                            a.unpop($(this), e)
                        })
                        c.html("<div>" + c.html() + "</div>");
                    }),
                    $(this).bind("expand",
                    function(e) {
                        a.pop($(this).data("container"), e)
                    }),
                    $(this).bind("retract",
                    function(e) {
                        a.unpop($(this).data("container"), e)
                    })
                }),
                setInterval(function() {
                    a.reLayout()
                },
                2e3)
            }),
            $(window).resize(function() {
                a.reLayout()
            })
        },
        this.reLayout = function() {
            $("div[data-expanderContainer]").each(function() {
                if ($(this).hasClass("open")) $(this).css({
                    top: $(window).scrollTop() + "px",
                    left: "0px",
                    width: "100%",
                    height: "100%"
                });
                else {
                    var b = $(this).data("original");
                    $(this).css({
                        width: b.parent.outerWidth(),
                        height: b.parent.outerHeight(),
                        top: b.parent.offset().top,
                        left: b.parent.offset().left
                    })
                }
            })
        },
        this.pop = function(b, info) {
            a.siv.removeClass(),
            a.siv.addClass("expander-siv").addClass("theme").addClass(b.data("options").theme),
            a.siv.addClass("show"),
            b.addClass("open"),
            b.css({
                position: "absolute",
                top: $(window).scrollTop() + "px",
                left: "0px",
                width: "100%",
                height: "100%"
            })
            if (b.find('VIDEO').length != 0) {
                b.find('VIDEO')[0].play();
            }
        },
        this.unpop = function(b, info) {
            if (info.target.tagName == 'VIDEO') return;
            a.siv.removeClass("show");
            var c = b.data("original").parent;

            if (info.currentTarget.firstChild.firstChild.tagName == 'VIDEO') {
                info.currentTarget.firstChild.firstChild.pause();
            }

            b.css({
                position: "absolute",
                top: c.offset().top + "px",
                left: c.offset().left + "px",
                width: c.outerWidth() + "px",
                height: c.outerHeight() + "px"
            }),
            b.removeClass("open")
        },
        this.init()
    }
    var a = new a
} ();