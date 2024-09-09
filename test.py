# id 찾기
def send_nickname_lang(lang):
    language = {
        "ko": {
            "subject": "[CloudStudio] 아이디 찾기",
            "title": "Draw Everything You Want!",
            "body": "회원님의 아이디는 다음과 같습니다."
        },
        "en": {
            "subject": "[CloudStudio] Find ID",
            "title": "Draw Everything You Want!",
            "body": "Your ID is as follows."
        },
        "jp": {
            "subject": "[CloudStudio] IDを探す",
            "title": "Draw Everything You Want!",
            "body": "会員様のIDは以下の通りです。"
        }
    }
    return language[lang]

# 이메일 인증
def send_authentication_lang(lang):
    language = {
        "ko": {
            "subject": "[CloudStudio] 인증 코드",
            "title": "Draw Everything You Want!",
            "body": "코드를 입력하시면 인증이 정상적으로 완료됩니다."

        },
        "en": {
            "subject": "[CloudStudio] Authentication Code",
            "title": "Draw Everything You Want!",
            "body": "If you enter the code, the authentication will be completed."
        },
        "jp": {
            "subject": "[CloudStudio] 認証コード",
            "title": "Draw Everything You Want!",
            "body": "コードを入力すると、認証が正常に完了します。"
        }
    }
    return language[lang]

# 프로젝트 초
def send_project_invite_lang(lang, from_user_nickname, project_name):
    language = {
        "ko": {
            "subject": "[CloudStudio] 프로젝트 초대",
            "body": f"\n{from_user_nickname}님 께서 귀하를 {project_name} 프로젝트에 초대하였습니다.",
        },
        "en": {
            "subject": "[CloudStudio] Invite Project",
            "body": f"\n{from_user_nickname} invited you to the {project_name} project.",
        },
        "jp": {
            "subject": "[CloudStudio] プロジェクト招待",
            "body": f"\n{from_user_nickname}様があなたを{project_name}プロジェクトに招待しました。",
        }
    }
    return language[lang]

def send_otp_set_alram_lang(lang, user_nickname, time, status):
    ko_status = "설정" if status else "변경"
    en_status = "set" if status else "changed"
    jp_status = "設定" if status else "変更"
    language = {
        "ko": {
            "subject": "[CloudStudio] OTP 설정",
            "body": f"\n{user_nickname}님의 OTP가 {time}(KST) 기준으로 {ko_status}되었습니다.",
        },
        "en": {
            "subject": "[Cloud Studio] Set OTP",
            "body": f"\n{user_nickname}'s OTP has been {en_status} as of {time}(UTC)",
        },
        "jp": {
            "subject": "[Cloud Studio] OTP 設定",
            "body": f"\n{user_nickname}様のOTPが{time}(UTC)基準に{jp_status}されました。",
        }
    }
    return language[lang]


def send_temporary_pw_lang(lang):
    language = {
        "ko": {
            "subject": "[CloudStudio] 사용자 정보",
            "title": "Draw Everything You Want!",
            "body": "아래의 아이디와 패스워드를 통해 CloudStudio 로그인을 진행할 수 있습니다.",
        },
        "en": {
            "subject": "[CloudStudio] User Information",
            "title": "Draw Everything You Want!",
            "body": "You can Sign-in to CloudStudio using the ID and password below."
        },
        "jp": {
            "subject": "[CloudStudio] ユーザー情報",
            "title": "Draw Everything You Want!",
            "body": "以下のIDとパスワードでCloudStudioログインを行うことができます。"
        }
    }
    return language[lang]


def payment_success_lang(lang, nickname, order_id, datetime, price, card_company, card_no):
    language = {
        "ko": {
            "subject": "[CloudStudio] 정기구독결제 성공",
            "title": "결제 성공",
            "success1": f"{nickname}님의 정기구독결제가",
            "success2": "완료되었습니다.",
            "success3": "구매해주셔서 감사합니다.",
            "bootpay": "bootpay 결제서비스를 통해 결제하신 정보입니다.",
            "goto": "서비스로 이동하기",
            "subtitle": "결제정보",
            "product": "상품명: 클라우드스튜디오 정기구독",
            "order_id": f"주문번호: {order_id}",
            "datetime": f"결제일시: {datetime}",
            "price": f"결제금액: {price}원/월",
            "card_company": f"카드사: {card_company}",
            "card_no": f"카드번호: **** **** **** {card_no}",
            "provider": "공급자명: cloudraw"
        },
        "en": {
            "subject": "[CloudStudio] Successful subscription payment",
            "title": "Payment successful",
            "success1": f"{nickname}'s subscription payment has been ",
            "success2": "completed.",
            "success3": "Thank you for your subscription.",
            "bootpay": "Information about payments made through the bootpay payment service.",
            "goto": "Go to services",
            "subtitle": "Payment information",
            "product": "Product: CloudStudio Subscription",
            "order_id": f"Order number: {order_id}",
            "datetime": f"Payment date: {datetime}",
            "price": f"Payment amount: {price}won/month",
            "card_company": f"Card company: {card_company}",
            "card_no": f"Card number: **** **** **** {card_no}",
            "provider": "Provider: cloudraw"
        },
        "jp": {
            "subject": "[CloudStudio] 定期購読決済成功",
            "title": "決済成功",
            "success1": f"{nickname}様の定期購読決済が",
            "success2": "完了しました。",
            "success3": "ご購入いただきありがとうございます。",
            "bootpay": "bootpay決済サービスでお支払いいただいた情報です。",
            "goto": "サービスに移動",
            "subtitle": "決済情報",
            "product": "商品名: CloudStudio定期購読",
            "order_id": f"注文番号: {order_id}",
            "datetime": f"決済日時: {datetime}",
            "price": f"決済金額: {price}ウォン/月",
            "card_company": f"カード会社: {card_company}",
            "card_no": f"カード番号: **** **** **** {card_no}",
            "provider": "供給者名: cloudraw"
        },
    }
    return language[lang]


def payment_failed_lang(lang, nickname, price, card_company, card_no, reserve_execute_date, invoice_due_date):
    language = {
        "ko": {
            "subject": "[CloudStudio] 정기구독결제 실패",
            "title": "결제 실패",
            "failed1": f"{nickname}님의 정기구독결제가",
            "failed2": "실패했습니다.",
            "goto": "서비스로 이동하기",
            "subtitle": "내 구독 정보",
            "product": "상품명: 클라우드스튜디오 정기구독",
            "price": f"결제금액: {price}원/월",
            "card_company": f"카드사: {card_company}",
            "card_no": f"카드번호: ****-****-****-{card_no}",
            "reserve_execute_date": f"결제예정일: {reserve_execute_date}",
            "invoice_due_date": f"{invoice_due_date}까지 결제가 완료되지 않으면 기능이 제한됩니다.",
        },
        "en": {
            "subject": "[CloudStudio] Subscription payment failed",
            "title": "Payment failed",
            "failed1": f"{nickname}'s subscription payment",
            "failed2": "failed.",
            "goto": "Go to services",
            "subtitle": "Subscription information",
            "product": "Product: CloudStudio Subscription",
            "price": f"Payment amount: {price}won/month",
            "card_company": f"Card company: {card_company}",
            "card_no": f"Card number: **** **** **** {card_no}",
            "reserve_execute_date": f"Payment due date: {reserve_execute_date}",
            "invoice_due_date": f"If payment is not completed by {invoice_due_date}, functionality will be limited.",
        },
        "jp": {
            "subject": "[CloudStudio] 定期購読決済失敗",
            "title": "決済失敗",
            "failed1": f"{nickname}様の定期購読決済が",
            "failed2": "失敗しました。",
            "goto": "サービスに移動",
            "subtitle": "私の購読情報",
            "product": "商品名: CloudStudio定期購読",
            "price": f"決済金額: {price}ウォン/月",
            "card_company": f"カード会社: {card_company}",
            "card_no": f"カード番号: ****-****-****-{card_no}",
            "reserve_execute_date": f"決済予定日: {reserve_execute_date}",
            "invoice_due_date": f"{invoice_due_date}までに決済が完了しないと機能が制限されます。",
        }
    }
    return language[lang]


def payment_notification_lang(lang, price, card_company, card_no, reserve_execute_date):
    language = {
        "ko": {
            "subject": "[CloudStudio] 정기구독결제 알림",
            "title": "결제 알림",
            "notification1": "7일 후",
            "notification2": "클라우드스튜디오 정기구독 결제가 진행됩니다.",
            "notification3": "등록하신 결제수단의 잔액을 유지해 주세요.",
            "subtitle": "결제예정정보",
            "product": "상품명: 클라우드스튜디오 정기구독",
            "price": f"결제금액: {price}원/월",
            "card_company": f"카드사: {card_company}",
            "card_no": f"카드번호: ****-****-****-{card_no}",
            "reserve_execute_date": f"결제예정일: {reserve_execute_date}",
        },
        "en": {
            "subject": "[CloudStudio] Subscription payment notification",
            "title": "Payment reminder",
            "notification1": "",
            "notification2": "CloudStudio subscription payment will be processed after 7 days.",
            "notification3": "Please maintain the balance of the payment method you registered.",
            "subtitle": "Payment schedule information",
            "product": "Product: CloudStudio Subscription",
            "price": f"Payment amount: {price}won/month",
            "card_company": f"Card company: {card_company}",
            "card_no": f"Card number: **** **** **** {card_no}",
            "reserve_execute_date": f"Payment due date: {reserve_execute_date}",
        },
        "jp": {
            "subject": "[CloudStudio] 定期購読決済のお知らせ",
            "title": "決済のお知らせ",
            "notification1": "7日後",
            "notification2": "CloudStudioの定期購読決済が行われます。",
            "notification3": "ご登録いただいた決済手段の残高を維持していただきます。",
            "subtitle": "決済予定情報",
            "product": "商品名: CloudStudio定期購読",
            "price": f"決済金額: {price}ウォン/月",
            "card_company": f"カード会社: {card_company}",
            "card_no": f"カード番号: ****-****-****-{card_no}",
            "reserve_execute_date": f"決済予定日: {reserve_execute_date}",
        }
    }
    return language[lang]


def info_lang(lang):
    language = {
        "ko": {
            "reference": "CloudStudio에 대해 자세히 알아보고 싶다면 아래를 참고하세요 :)",
            "noreply": "본 메일은 발신전용입니다. 궁금한 점이 있다면 Cloudraw",
            "support": "고객센터",
            "request": "로 문의해주세요."
        },
        "en": {
            "reference": "To learn more about CloudStudio, see below :)",
            "noreply": "This email is for sending only. If you have any questions, please contact ",
            "support": "customer service",
            "request": ""
        },
        "jp": {
            "reference": "CloudStudioについて詳しく知りたい場合は以下を参照してください。 :)",
            "noreply": "本メールは発信専用です。知りたいことがあればCloudraw",
            "support": "カスタマーサポート",
            "request": "までお問い合わせお願いします。"
        }
    }
    return language[lang]


def payment_info_lang(lang):
    language = {
        "ko": {
            "reference": "CloudStudio에 대해 자세히 알아보고 싶다면 아래를 참고하세요 :)",
            "noreply": "본 메일은 발신전용입니다. 궁금한 점이 있다면 Cloudraw",
            "support": "고객센터",
            "request": "로 문의해주세요."
        },
        "en": {
            "reference": "To learn more about CloudStudio, see below :)",
            "noreply": "This email is for sending only. If you have any questions, please contact ",
            "support": "customer service",
            "request": ""
        },
        "jp": {
            "reference": "CloudStudioについて詳しく知りたい場合は以下を参照してください。 :)",
            "noreply": "本メールは発信専用です。知りたいことがあればCloudraw",
            "support": "カスタマーサポート",
            "request": "までお問い合わせお願いします。"
        }
    }
    return language[lang]