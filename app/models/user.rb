class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :first_name, :last_name, :sex, :date_of_birth, presence: true
    validates :password, length: { minimum: 6 }, allow_nil: true
   

    attr_reader :password

    before_validation  :ensure_session_token

    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token
        self.update(session_token: SecureRandom.urlsafe_base64(16))
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

end



